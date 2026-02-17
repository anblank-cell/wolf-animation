import './App.css'
import gsap from 'gsap'
import { useGSAP }from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function App() {
  
  gsap.registerPlugin(useGSAP)
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() =>{
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-1",
        start: "top viewport",
        markers: true,
        scrub: true,
        endTrigger: "#section-4",
        end:"top viewport"
      }
    })

    tl.to("html", {
      backgroundColor: "#9e9e9e"
    })
    .to("html", {
      backgroundColor: "#a0a9f2"
    })
    .to("html", {
      backgroundColor: "#88fbff"
    })
  }, [])
  return (
    <main>
      <section id='section-1'>Section 1</section>
      <section id='section-2'>Section 2</section>
      <section id='section-3'>Section 3</section>
      <section id='section-4'>Section 4</section>
      </main>
  )
}

export default App
