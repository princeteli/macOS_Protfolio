import { WindowControls } from '#components'
import { gallery, photosLinks } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'

const Photos = () => {
  return (
    <>
      <div id='window-header' data-drag-handle>
        <WindowControls target="photos" />
        <h2>Gallery</h2>
      </div>

      <div className='flex h-full'>

        {/* Sidebar — macOS Photos app style */}
        <div className='sidebar'>
          <h2>Library</h2>
          <ul>
            {photosLinks.map(({ id, icon, title }) => (
              <li key={id}>
                <img src={icon} alt={title} />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Gallery grid */}
        <div className='gallery'>
          <ul>
            {gallery.map(({ id, img }) => (
              <li key={id}>
                <img src={img} alt={`photo-${id}`} loading='lazy' />
              </li>
            ))}
          </ul>
        </div>

      </div>
    </>
  )
}

const PhotoWindow = WindowWrapper(Photos, "photos")

export default PhotoWindow
