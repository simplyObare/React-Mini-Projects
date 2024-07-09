/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react'

const ContextMenu = ({ children, items }) => {
  const [visible, setVisible] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const wrapperRef = useRef()

  const handleContextMenu = (e) => {
    e.preventDefault()
    setPosition({ x: e.pageX, y: e.pageY })
    setVisible(true)
  }

  const handleClick = () => {
    setVisible(false)
  }

  const handleItemClick = (action) => {
    setVisible(false)
    action()
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <div ref={wrapperRef} onContextMenu={handleContextMenu}>
      {children}
      {visible && (
        <div
          style={{ top: `${position.y}px`, left: `${position.x}px` }}
          className="absolute flex flex-col bg-white border border-gray-300 z-50 shadow-md"
        >
          {items.map((item, index) => (
            <button
              key={index}
              className="text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => {
                handleItemClick(item.action)
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ContextMenu
