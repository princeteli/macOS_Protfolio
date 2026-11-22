import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper'
import useWindowStore from '#store/window'
import { Trash2, ArchiveX } from 'lucide-react'
import React, { useState } from 'react'

const archiveItems = [
  {
    id: 1,
    name: 'trash-1.png',
    icon: '/images/image.png',
    imageUrl: '/images/trash-1.png',
    size: '1.2 MB',
    deleted: 'Nov 10, 2026',
  },
  {
    id: 2,
    name: 'trash-2.png',
    icon: '/images/image.png',
    imageUrl: '/images/trash-2.png',
    size: '980 KB',
    deleted: 'Nov 14, 2026',
  },
]

const Archive = () => {
  const { openWindow } = useWindowStore()
  const [selected, setSelected] = useState(null)
  const [items, setItems] = useState(archiveItems)
  const [emptied, setEmptied] = useState(false)

  const handleOpen = (item) => {
    openWindow('imgfile', { name: item.name, imageUrl: item.imageUrl })
  }

  const handleDelete = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
    if (selected === id) setSelected(null)
  }

  const handleEmptyTrash = () => {
    setItems([])
    setSelected(null)
    setEmptied(true)
  }

  return (
    <>
      <div id='window-header' data-drag-handle>
        <WindowControls target='trash' />
        <h2>Archive</h2>

        {items.length > 0 && (
          <button
            type='button'
            onClick={handleEmptyTrash}
            className='ml-auto flex items-center gap-1 px-2 py-1 rounded text-xs font-medium'
            style={{ background: 'rgba(255,80,80,0.18)', color: '#ff6b6b', border: '1px solid rgba(255,80,80,0.25)' }}
            title='Empty Archive'
          >
            <Trash2 size={12} />
            Empty
          </button>
        )}
      </div>

      <div className='flex h-full bg-white' style={{ minHeight: '300px' }}>

        {/* Sidebar */}
        <div className='sidebar'>
          <h2>Archive</h2>
          <ul>
            <li style={{ opacity: 1 }}>
              <img src='/icons/trash.svg' alt='Trash' />
              <p>Trash</p>
            </li>
          </ul>

          {selected && items.find(i => i.id === selected) && (
            <div
              className='mt-auto p-3 text-xs space-y-1'
              style={{ borderTop: '1px solid rgba(255,255,255,0.1)', opacity: 0.75 }}
            >
              <p className='font-semibold truncate'>{items.find(i => i.id === selected)?.name}</p>
              <p>Size: {items.find(i => i.id === selected)?.size}</p>
              <p>Deleted: {items.find(i => i.id === selected)?.deleted}</p>
            </div>
          )}
        </div>

        {/* Main content */}
        <div className='flex-1 p-4 overflow-y-auto'>
          {items.length === 0 ? (
            <div className='flex flex-col items-center justify-center h-full gap-3 opacity-40'>
              <ArchiveX size={48} strokeWidth={1} />
              <p className='text-sm'>{emptied ? 'Archive emptied.' : 'Archive is empty.'}</p>
            </div>
          ) : (
            <ul className='grid grid-cols-2 gap-3'>
              {items.map((item) => (
                <li
                  key={item.id}
                  className='rounded-xl overflow-hidden cursor-pointer transition-all'
                  style={{
                    border: selected === item.id
                      ? '2px solid rgba(255,255,255,0.4)'
                      : '2px solid transparent',
                    background: 'rgba(255,255,255,0.06)',
                  }}
                  onClick={() => setSelected(item.id)}
                  onDoubleClick={() => handleOpen(item)}
                  title={`Double-click to preview ${item.name}`}
                >
                  <div className='relative w-full aspect-video overflow-hidden'>
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className='w-full h-full object-cover'
                      loading='lazy'
                      onError={(e) => { e.currentTarget.style.display = 'none' }}
                    />
                    <div
                      className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity'
                      style={{ background: 'rgba(0,0,0,0.5)' }}
                    >
                      <span className='text-xs text-white'>Double-click to open</span>
                    </div>
                  </div>

                  <div className='p-2 flex items-center justify-between'>
                    <div className='flex items-center gap-2 min-w-0'>
                      <img src={item.icon} alt='' className='w-5 h-5 flex-shrink-0' />
                      <span className='text-xs truncate opacity-80'>{item.name}</span>
                    </div>
                    <button
                      type='button'
                      title='Delete permanently'
                      onClick={(e) => { e.stopPropagation(); handleDelete(item.id) }}
                      className='p-1 rounded opacity-50 hover:opacity-100 transition-opacity flex-shrink-0'
                      style={{ color: '#ff6b6b' }}
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </>
  )
}

const ArchiveWindow = WindowWrapper(Archive, 'trash')
export default ArchiveWindow

