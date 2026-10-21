import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { useEffect, useRef, useState } from 'react'

import { Dock, Home, Navbar, Welcome } from '#components'
import { Finder, Resume, Safari, Terminal, Text, ImageShow, Contact, Photos } from '#windows'

const videos = [
  '/videos/video1.mp4',
  '/videos/video2.mp4',
  '/videos/video3.mp4',
  '/videos/video4.mp4',
  '/videos/video5.mp4',

]

const App = () => {

  gsap.registerPlugin(Draggable)

  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    const current = videoRefs.current[currentVideo];

    if (current) {
      current.currentTime = 0;
      const p = current.play();
      if (p && p.catch) p.catch(() => {});
    }

    videoRefs.current.forEach((v, i) => {
      if (v && i !== currentVideo) v.pause();
    });
  }, [currentVideo]);

  return (
    <main className="relative min-h-screen">
       <div
        className="fixed inset-0 z-0 grid overflow-hidden pointer-events-none bg-black"
        aria-hidden="true"
      >
        {videos.map((src, index) => {
          const nextIndex = (currentVideo + 1) % videos.length;
          const shouldLoad = index === currentVideo || index === nextIndex;

          return (
            <video
              key={src}
              ref={(el) => (videoRefs.current[index] = el)}
              src={src}
              muted
              playsInline
              preload={shouldLoad ? "auto" : "metadata"}
              onEnded={() => setCurrentVideo((index + 1) % videos.length)}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
                index === currentVideo ? "opacity-100" : "opacity-0"
              }`}
            />
          );
        })}
      </div>

   
        <Navbar />
        <Welcome />
        <Dock />
        <Terminal />
        <Safari />
        <Resume />
        <Finder />
        <Text />
        <ImageShow />
        <Contact />
        <Photos />
        <Home />
    </main>
  )
}

export default App