import { WindowControls } from '#components'
import { techStack, socials } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import React from 'react'

const About = () => {
  return (
    <>
      <div id='window-header' data-drag-handle>
        <WindowControls target="about" />
        <h2>About Me</h2>
      </div>

      <div className='p-5 space-y-5 overflow-y-auto bg-white' style={{ maxHeight: '480px' }}>

        {/* Profile */}
        <div className='flex items-center gap-4'>
          <img
            src='/images/myImg.png'
            alt='Prince'
            className='w-16 h-16 rounded-full object-cover ring-2 ring-white/20'
          />
          <div>
            <h3 className='text-lg font-bold'>Prince Teli</h3>
            <p className='text-sm opacity-70'>Full-Stack Web Developer</p>
          </div>
        </div>

        {/* Bio */}
        <div className='space-y-2 text-sm leading-relaxed opacity-90'>
          <p>
            Hey! I'm Prince 👋, a web developer who enjoys building sleek, interactive
            websites that actually work well.
          </p>
          <p>
            I specialize in <strong>JavaScript</strong>, <strong>React</strong>, and{' '}
            <strong>Next.js</strong> — and I love making things feel smooth, fast, and
            just a little bit delightful.
          </p>
          <p>
            I'm big on clean UI, good UX, and writing code that doesn't need a search
            party to debug.
          </p>
          <p>
            Outside of dev work, you'll find me tweaking layouts at 2AM, sipping
            overpriced coffee, or impulse-buying gadgets I absolutely convinced myself
            I needed 😅
          </p>
        </div>

        {/* Tech Stack */}
        <div>
          <h4 className='font-semibold mb-2 text-sm uppercase tracking-widest opacity-60'>
            Tech Stack
          </h4>
          <div className='flex flex-wrap gap-2'>
            {techStack.flatMap(({ items }) => items).map((tech, i) => (
              <span
                key={i}
                className='px-2 py-1 rounded text-xs font-medium'
                style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.15)' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Socials */}
        <div>
          <h4 className='font-semibold mb-2 text-sm uppercase tracking-widest opacity-60'>
            Find Me Online
          </h4>
          <ul className='flex flex-wrap gap-2'>
            {socials.map(({ id, text, icon, bg, link }) => (
              <li key={id}>
                <a
                  href={link}
                  target='_blank'
                  rel='noopener noreferrer'
                  title={text}
                  className='flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-white'
                  style={{ background: bg }}
                >
                  <img src={icon} alt={text} className='w-4 h-4' />
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </>
  )
}

const AboutWindow = WindowWrapper(About, 'about')
export default AboutWindow

