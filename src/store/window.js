import { INITIAL_Z_INDEX, WINDOW_CONFIG } from '#constants'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

// Inject extra state fields into every window config entry
const buildInitialWindows = () => {
  const result = {}
  for (const [key, val] of Object.entries(WINDOW_CONFIG)) {
    result[key] = {
      ...val,
      width:      null,
      height:     null,
      minimized:  false,
      maximized:  false,
      // snapshot: stores size/position before maximize so we can restore
      snapshot:   null,
    }
  }
  return result
}

const useWindowStore = create(immer((set) => ({
  windows: buildInitialWindows(),
  nextZIndex: INITIAL_Z_INDEX + 1,

  openWindow: (windowKey, data = null) =>
    set((state) => {
      const win = state.windows[windowKey]
      if (!win) {
        console.log('❌ Window not found:', windowKey)
        return
      }
      win.isOpen     = true
      win.minimized  = false
      win.zIndex     = state.nextZIndex
      win.data       = data ?? win.data
      state.nextZIndex++
    }),

  closeWindow: (windowKey) => set((state) => {
    const win = state.windows[windowKey]
    if (!win) return
    win.isOpen    = false
    win.minimized = false
    win.maximized = false
    win.zIndex    = INITIAL_Z_INDEX
    win.data      = null
    win.width     = null
    win.height    = null
    win.snapshot  = null
  }),

  focusWindow: (windowKey) => set((state) => {
    const win = state.windows[windowKey]
    if (!win) return
    win.zIndex = state.nextZIndex++
  }),

  resizeWindow: (windowKey, width, height) => set((state) => {
    const win = state.windows[windowKey]
    if (!win) return
    win.width  = width
    win.height = height
  }),

  minimizeWindow: (windowKey) => set((state) => {
    const win = state.windows[windowKey]
    if (!win) return
    win.minimized = true
    win.maximized = false
  }),

  // restoreWindow — un-minimize (but keep same size/position)
  restoreWindow: (windowKey) => set((state) => {
    const win = state.windows[windowKey]
    if (!win) return
    win.minimized = false
  }),

  maximizeWindow: (windowKey, currentRect) => set((state) => {
    const win = state.windows[windowKey]
    if (!win) return

    if (win.maximized) {
      // Restore from snapshot
      if (win.snapshot) {
        win.width     = win.snapshot.width
        win.height    = win.snapshot.height
      }
      win.maximized = false
      win.snapshot  = null
    } else {
      // Save current size as snapshot before maximizing
      win.snapshot  = { width: currentRect.width, height: currentRect.height }
      win.maximized = true
      win.width     = null   // WindowWrapper will set 100vw/100vh
      win.height    = null
    }
  }),

})))

export default useWindowStore