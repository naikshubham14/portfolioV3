import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function useScrollAnimation() {
  useEffect(() => {
    const ctx = gsap.context(() => {

      // Fade + slide up each section heading
      gsap.utils.toArray('.gsap-heading').forEach(el => {
        gsap.fromTo(el,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            }
          }
        )
      })

      // Stagger children inside .gsap-stagger containers
      gsap.utils.toArray('.gsap-stagger').forEach(container => {
        const children = container.querySelectorAll('.gsap-item')
        gsap.fromTo(children,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0,
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: container,
              start: 'top 80%',
              toggleActions: 'play none none none',
            }
          }
        )
      })

      // Horizontal slide-in for experience timeline items
      gsap.utils.toArray('.gsap-slide-right').forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, x: -40 },
          {
            opacity: 1, x: 0,
            duration: 0.7,
            ease: 'power2.out',
            delay: i * 0.08,
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            }
          }
        )
      })

      // Skills tag pop-in
      gsap.utils.toArray('.gsap-pop').forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, scale: 0.85 },
          {
            opacity: 1, scale: 1,
            duration: 0.4,
            ease: 'back.out(1.4)',
            delay: i * 0.03,
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none none',
            }
          }
        )
      })

      // Cyan line grows down on scroll (hero scroll indicator)
      gsap.to('.gsap-line', {
        scaleY: 1,
        transformOrigin: 'top center',
        ease: 'none',
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        }
      })

    })

    return () => ctx.revert()
  }, [])
}