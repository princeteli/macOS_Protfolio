import useWindowStore from '#store/window'
import { useState } from 'react'

const WindowControls = ({ target }) => {
  const { closeWindow, minimizeWindow, restoreWindow, maximizeWindow, windows } = useWindowStore()

  const windowState = windows?.[target]
  const minimized = windowState?.minimized ?? false
  const maximized = windowState?.maximized ?? false

  const [hovered, setHovered] = useState(false)

  const handleMaximize = () => {
    // Find the section DOM element to read its current size
    const el = document.getElementById(target)
    if (!el) return
    maximizeWindow(target, { width: el.offsetWidth, height: el.offsetHeight })
  }

  const handleMinimize = () => {
    if (minimized) {
      restoreWindow(target)
    } else {
      minimizeWindow(target)
    }
  }

  return (
    <div
      id='window-controls'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ● Close */}
      <button
        type='button'
        className='close'
        title='Close'
        onClick={() => closeWindow(target)}
        aria-label='Close window'
      >
        {hovered && <span className='win-ctrl-icon'>✕</span>}
      </button>

      {/* ● Minimize / Restore */}
      <button
        type='button'
        className={`minimize ${minimized ? 'opacity-50' : ''}`}
        title={minimized ? 'Restore' : 'Minimize'}
        onClick={handleMinimize}
        aria-label={minimized ? 'Restore window' : 'Minimize window'}
      >
        {hovered && <span className='win-ctrl-icon'>{minimized ? '↑' : '−'}</span>}
      </button>

      {/* ● Maximize / Restore */}
      <button
        type='button'
        className={`maximize ${maximized ? 'ring-1 ring-green-600' : ''}`}
        title={maximized ? 'Restore window size' : 'Maximize'}
        onClick={handleMaximize}
        aria-label={maximized ? 'Restore window size' : 'Maximize window'}
      >
        {hovered && (
          <span className='win-ctrl-icon'>{maximized ? '⊡' : '⤢'}</span>
        )}
      </button>
    </div>
  )
}

export default WindowControls
