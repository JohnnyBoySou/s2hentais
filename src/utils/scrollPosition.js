import { useEffect, useState } from 'react'

const useScrollPosition = ( element ) => {

   const [scrollPosition, setPosition] = useState({ scrollX: 0, scrollY: 0 })

   useEffect(() => {
    function updatePosition() {
        setPosition({ scrollX: element.scrollX, scrollY: element.scrollY })
    }

    window.addEventListener('scroll', updatePosition)
    updatePosition()

    return () => window.removeEventListener('scroll', updatePosition)
   }, [])

   return scrollPosition
}

export default useScrollPosition;