import { useEffect, useState } from 'react'
import './CustomCursor.css'

function CustomCursor() {

  let [position, setPosition] = useState({
    x: -100,
    y: -100
  })

  useEffect(() => {

    let moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }

  }, [])

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    ></div>
  )
}

export default CustomCursor