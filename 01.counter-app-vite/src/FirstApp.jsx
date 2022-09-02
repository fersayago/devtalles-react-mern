// si no se cambia el valor y no se tiene relación con ningun hook, conviene ponerlo por fuera del compoente funcional
// no se pueden pasar objetos para renderizar
const newMessage = {
  message: 'Bienvenido',
  name: 'Fernando'
}

const getGreeting = (nombre, mensaje) => {
  return `${mensaje} ${nombre}`
}

const FirstApp = () => {

  
  
  return (
    <>
    {/* <code>{ JSON.stringify( newMessage ) }</code> */}
      <h1>{ getGreeting(newMessage.name, newMessage.message) }</h1>
      <h2>Soy un subtitulo</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, error esse labore magnam possimus est quo. Minima amet maxime, veniam ducimus molestiae et rerum, blanditiis, ipsam accusantium nesciunt id officia.</p>
    </>
  )
}

export default FirstApp