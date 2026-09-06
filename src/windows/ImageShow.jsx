import WindowWrapper from '#hoc/WindowWrapper'
import { WindowControls } from '#components'
import useWindowStore from '#store/window'
import { ZoomIn, ZoomOut, RotateCw, Download } from 'lucide-react'
import { useState, useCallback } from 'react'

const ImageShow = () => {
  const { windows } = useWindowStore()
  const data = windows.imgfile?.data

  const [zoom, setZoom] = useState(1)
  const [rotation, setRotation] = useState(0)

  const zoomIn = useCallback(() => setZoom(z => Math.min(z + 0.25, 3)), [])
  const zoomOut = useCallback(() => setZoom(z => Math.max(z - 0.25, 0.25)), [])
  const rotate = useCallback(() => setRotation(r => (r + 90) % 360), [])
  const resetView = useCallback(() => { setZoom(1); setRotation(0) }, [])

  if (!data) return null

  const { name, imageUrl } = data

  return (
    <>
      {/* macOS Preview-style header */}
      <div id='window-header' data-drag-handle>
        <WindowControls target="imgfile" />
        <p title={name}>{name}</p>

        {/* Toolbar actions */}
        <div className='flex items-center gap-1 ml-auto'>
          <button
            type='button'
            onClick={zoomOut}
            title='Zoom Out'
            className='imgfile-btn'
            disabled={zoom <= 0.25}
          >
            <ZoomOut size={14} />
          </button>

          <button
            type='button'
            onClick={resetView}
            title='Reset View'
            className='imgfile-zoom-label'
          >
            {Math.round(zoom * 100)}%
          </button>

          <button
            type='button'
            onClick={zoomIn}
            title='Zoom In'
            className='imgfile-btn'
            disabled={zoom >= 3}
          >
            <ZoomIn size={14} />
          </button>

          <div className='imgfile-divider' />

          <button
            type='button'
            onClick={rotate}
            title='Rotate'
            className='imgfile-btn'
          >
            <RotateCw size={14} />
          </button>

          {imageUrl && (
            <a
              href={imageUrl}
              download={name}
              title='Download'
              className='imgfile-btn'
            >
              <Download size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Image preview area */}
      <div className='preview'>
        {imageUrl ? (
          <div className='imgfile-canvas'>
            <img
              src={imageUrl}
              alt={name}
              style={{
                transform: `scale(${zoom}) rotate(${rotation}deg)`,
                transition: 'transform 0.25s ease',
              }}
              draggable={false}
            />
          </div>
        ) : (
          <div className='imgfile-placeholder'>
            <p>No image to display</p>
          </div>
        )}
      </div>
    </>
  )
}

const ImageWindow = WindowWrapper(ImageShow, "imgfile")
export default ImageWindow
