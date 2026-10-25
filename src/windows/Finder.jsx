import { WindowControls } from '#components'
import { locations } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import useWindowStore from '#store/window'
import useLocationStore from '#store/location'
import clsx from 'clsx'
import { Search } from 'lucide-react'
import React from 'react'

const Finder = () => {


  const { openWindow } = useWindowStore()

  const { activeLocation, setActiveLocation } = useLocationStore()


  const renderList = (name, items, keyPrefix) => (
    <div>
      <h3>{name}</h3>

      <ul>
        {items.map((item) => (
          <li
            key={`${keyPrefix}-${item.id}`}
            onClick={() => setActiveLocation(item)}
            className={clsx(
              "cursor-pointer",
              item.id === activeLocation?.id ? "active" : "not-active"
            )}
          >
            <img
              src={item.icon}
              className="w-4"
              alt={item.name}
            />

            <p className="text-sm font-medium truncate">
              {item.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )

  const openItem = (item) => {
    if (item.fileType === 'pdf') return openWindow('resume')
    if (item.kind === 'folder') return setActiveLocation(item)
    if (['fig', 'url'].includes(item.fileType) && item.href) return window.open(item.href, "_blank")

    openWindow(`${item.fileType}${item.kind}`, item)
  }

  return (
    <div className='flex flex-col h-full w-full select-none'>
      <div id='window-header' data-drag-handle className='flex-shrink-0'>
        <WindowControls target="finder" />
        <Search className='icon' />
      </div>

      <div className='bg-white flex flex-1 min-h-0 overflow-hidden'>
        <div className="sidebar">
          {renderList("Favorites", Object.values(locations), "favorite")}
          {renderList("My Projects", locations.work.children, "project")}
        </div>

        <ul className='content'>
          {activeLocation?.children?.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer group"
              onClick={() => openItem(item)}
              title={item.name}
            >
              <img
                src={item.icon}
                alt={item.name}
              />
              <p className='text-xs font-medium text-gray-800 text-center truncate w-full'>
                {item.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const FinderWindow = WindowWrapper(Finder, "finder")

export default FinderWindow
