import dayjs from 'dayjs'
import { navIcons, navLinks } from '#constants'
import useWindowStore from '#store/window'


const Navbar = () => {

  const { openWindow } = useWindowStore()

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="" />
        <p className='font-bold'>Prince PortFolio</p>

        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li className='hover:text-white cursor-pointer' key={id} onClick={()=>openWindow(type)}>{name}</li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {
            navIcons.map(({ id, img }) => (
              <li className='cursor-pointer' key={id}>
                <img src={img} className='icon-hover' alt={`icon-${id}`} />
              </li>
            ))
          }
        </ul>

        <time datetime="">{dayjs().format('ddd mmm D h:mm A')}</time>
      </div>

    </nav>
  )
}

export default Navbar
