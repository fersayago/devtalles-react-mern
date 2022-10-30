import { useLayoutEffect, useRef, useState } from "react"

const Quote = ({ quote, author }) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({
    width: 0,
    height: 0
  })

  // se dispara cuando el componente elegido se renderiza completamente
  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect()

    setBoxSize({width, height})
    console.log(boxSize)
  }, [quote])

  return (
    <>
      <blockquote
        className='blockquote text-end'
        style={{ display: 'flex' }}
        >
        <p ref={ pRef } className='mb-1'>{ quote }</p>
        <footer className='blockquote-footer'>{ author }</footer>
      </blockquote>

      <code>{ JSON.stringify(boxSize) }</code>
    </>
  )
}

export default Quote