import useWindowStore from "#store/window"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useLayoutEffect, useRef, useCallback, useEffect } from "react"

const MIN_WIDTH  = 280
const MIN_HEIGHT = 180
const NAVBAR_H   = 40

/**
 * 8 resize handles — 4 corners + 4 edges
 *
 * flipX → left-side handles  (drag left = grow, right-edge stays fixed)
 * flipY → top-side handles   (drag up  = grow, bottom-edge stays fixed)
 *
 * For flipX/flipY handles we also shift the GSAP x/y so the
 * opposite edge stays anchored in place.
 */
const HANDLES = [
  // ── Corners ──────────────────────────────────────────────────
  { pos: 'br', resizeW: true,  resizeH: true,
    style: { bottom: 0,  right: 0,  width: 16, height: 16, cursor: 'nwse-resize' } },
  { pos: 'bl', resizeW: true,  resizeH: true,  flipX: true,
    style: { bottom: 0,  left:  0,  width: 16, height: 16, cursor: 'nesw-resize' } },
  { pos: 'tr', resizeW: true,  resizeH: true,  flipY: true,
    style: { top: -3,    right: -3, width: 16, height: 16, cursor: 'nesw-resize' } },
  { pos: 'tl', resizeW: true,  resizeH: true,  flipX: true, flipY: true,
    style: { top: -3,    left:  -3, width: 16, height: 16, cursor: 'nwse-resize' } },

  // ── Edges ─────────────────────────────────────────────────────
  { pos: 'b',  resizeW: false, resizeH: true,
    style: { bottom: 0,  left: '50%', transform: 'translateX(-50%)', width: 72, height: 6, cursor: 'ns-resize' } },
  { pos: 't',  resizeW: false, resizeH: true,  flipY: true,
    style: { top: -3,    left: '50%', transform: 'translateX(-50%)', width: 72, height: 6, cursor: 'ns-resize' } },
  { pos: 'r',  resizeW: true,  resizeH: false,
    style: { top: '50%', right: -3,  transform: 'translateY(-50%)', width: 6, height: 72, cursor: 'ew-resize' } },
  { pos: 'l',  resizeW: true,  resizeH: false, flipX: true,
    style: { top: '50%', left:  -3,  transform: 'translateY(-50%)', width: 6, height: 72, cursor: 'ew-resize' } },
]

const WindowWrapper = (Component, windowKey) => {

  const Wrapped = (props) => {
    const {
      focusWindow, resizeWindow,
      minimizeWindow, restoreWindow, maximizeWindow,
      windows,
    } = useWindowStore()

    const windowState = windows?.[windowKey]
    const isOpen    = windowState?.isOpen    ?? false
    const zIndex    = windowState?.zIndex    ?? 0
    const storedW   = windowState?.width     ?? null
    const storedH   = windowState?.height    ?? null
    const minimized = windowState?.minimized ?? false
    const maximized = windowState?.maximized ?? false

    const ref          = useRef(null)
    const draggableRef = useRef(null)   // stores Draggable instance for .update()

    // ── Open animation ────────────────────────────────────────────
    useGSAP(() => {
      const el = ref.current
      if (!el || !isOpen) return
      el.style.display = "block"
      gsap.fromTo(el,
        { scale: 0.85, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      )
    }, [isOpen])

    // ── GSAP Draggable — scoped trigger so multiple windows work ──
    useGSAP(() => {
      const el = ref.current
      if (!el) return
      const header = el.querySelector('[data-drag-handle]')
      const [instance] = Draggable.create(el, {
        trigger: header ?? el,
        onPress: () => focusWindow(windowKey),
      })
      draggableRef.current = instance
      return () => instance.kill()
    }, [])

    // ── Show / hide ───────────────────────────────────────────────
    useLayoutEffect(() => {
      const el = ref.current
      if (!el) return
      el.style.display = isOpen ? "block" : "none"
    }, [isOpen])

    // ── Minimize animation ────────────────────────────────────────
    useEffect(() => {
      const el = ref.current
      if (!el) return
      if (minimized) {
        gsap.to(el, {
          scaleY: 0.04, scaleX: 0.6, opacity: 0,
          y: window.innerHeight / 2,
          duration: 0.3, ease: "power2.in",
          onComplete: () => { el.style.pointerEvents = 'none' }
        })
      } else if (isOpen) {
        el.style.pointerEvents = 'auto'
        gsap.to(el, {
          scaleY: 1, scaleX: 1, opacity: 1, y: 0,
          duration: 0.35, ease: "power2.out",
        })
      }
    }, [minimized])

    // ── Maximize / restore ────────────────────────────────────────
    useEffect(() => {
      const el = ref.current
      if (!el) return
      if (maximized) {
        gsap.to(el, {
          width:  window.innerWidth,
          height: window.innerHeight - NAVBAR_H,
          x: 0, y: 0,
          duration: 0.35, ease: "power2.inOut",
          onComplete: () => {
            el.style.top  = NAVBAR_H + 'px'
            el.style.left = '0px'
            draggableRef.current?.update()
          }
        })
      } else if (storedW || storedH) {
        gsap.to(el, {
          width:  storedW ?? el.offsetWidth,
          height: storedH ?? el.offsetHeight,
          duration: 0.3, ease: "power2.inOut",
        })
      }
    }, [maximized])

    // ── Sync stored dimensions ────────────────────────────────────
    useEffect(() => {
      const el = ref.current
      if (!el || maximized) return
      el.style.width  = storedW ? storedW + 'px' : ''
      el.style.height = storedH ? storedH + 'px' : ''
    }, [storedW, storedH, maximized])

    // ── Maximize toggle helper ────────────────────────────────────
    const handleMaximize = useCallback(() => {
      const el = ref.current
      if (!el) return
      maximizeWindow(windowKey, { width: el.offsetWidth, height: el.offsetHeight })
      focusWindow(windowKey)
    }, [maximizeWindow, focusWindow])

    // ── Expose helpers for WindowControls ────────────────────────
    useEffect(() => {
      const el = ref.current
      if (!el) return
      el.__wrapperHandlers = {
        minimize:    () => minimizeWindow(windowKey),
        restore:     () => restoreWindow(windowKey),
        maximize:    handleMaximize,
        isMinimized: () => minimized,
        isMaximized: () => maximized,
      }
    })

    // ── Resize (all 8 handles, pointer-capture) ───────────────────
    const startResize = useCallback((e, { resizeW, resizeH, flipX = false, flipY = false }) => {
      e.preventDefault()
      e.stopPropagation()
      if (maximized) return

      const handle = e.currentTarget
      handle.setPointerCapture(e.pointerId)

      const el = ref.current
      if (!el) return

      focusWindow(windowKey)

      // Snapshot at drag-start
      const startMouseX = e.clientX
      const startMouseY = e.clientY
      const startW = el.offsetWidth
      const startH = el.offsetHeight
      // Read GSAP's current x/y transform so we can shift it for
      // top / left handles without losing the Draggable position
      const startGSAPx = parseFloat(gsap.getProperty(el, 'x')) || 0
      const startGSAPy = parseFloat(gsap.getProperty(el, 'y')) || 0

      const onMove = (ev) => {
        const dx = ev.clientX - startMouseX
        const dy = ev.clientY - startMouseY

        let newW = startW
        let newH = startH
        let newX = startGSAPx
        let newY = startGSAPy

        if (resizeW) {
          if (flipX) {
            // Left-side handle → grow when dragging left (dx < 0)
            // Keep RIGHT edge fixed: newX + newW = startGSAPx + startW
            newW = Math.max(MIN_WIDTH, startW - dx)
            newX = startGSAPx + startW - newW
          } else {
            newW = Math.max(MIN_WIDTH, startW + dx)
          }
        }

        if (resizeH) {
          if (flipY) {
            // Top-side handle → grow when dragging up (dy < 0)
            // Keep BOTTOM edge fixed: newY + newH = startGSAPy + startH
            newH = Math.max(MIN_HEIGHT, startH - dy)
            newY = startGSAPy + startH - newH
          } else {
            newH = Math.max(MIN_HEIGHT, startH + dy)
          }
        }

        // Apply size
        el.style.width  = newW + 'px'
        el.style.height = newH + 'px'

        // Apply position shift (only for top/left handles)
        if (newX !== startGSAPx || newY !== startGSAPy) {
          gsap.set(el, { x: newX, y: newY })
          // Sync Draggable's internal position so next drag is correct
          draggableRef.current?.update()
        }
      }

      const onUp = () => {
        const el = ref.current
        if (el) resizeWindow(windowKey, el.offsetWidth, el.offsetHeight)
        handle.releasePointerCapture(e.pointerId)
        handle.removeEventListener('pointermove', onMove)
        handle.removeEventListener('pointerup',   onUp)
      }

      handle.addEventListener('pointermove', onMove)
      handle.addEventListener('pointerup',   onUp)
    }, [focusWindow, resizeWindow, maximized])

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex, overflow: 'visible' }}
        className="absolute"
      >
        {/* Inner wrapper keeps overflow:hidden + border-radius for content */}
        <div
          className="window-body"
          style={{
            width:        '100%',
            height:       storedH ? '100%' : 'auto',
            overflow:     'hidden',
            borderRadius: 'inherit',
          }}
        >
          <Component {...props} />
        </div>

        {/* 8 resize handles — outside overflow:hidden so never clipped */}
        {isOpen && !maximized && HANDLES.map(({ pos, style, resizeW, resizeH, flipX, flipY }) => (
          <div
            key={pos}
            className="resize-handle"
            style={style}
            onPointerDown={(e) => startResize(e, { resizeW, resizeH, flipX, flipY })}
          />
        ))}
      </section>
    )
  }

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`
  return Wrapped
}

export default WindowWrapper
