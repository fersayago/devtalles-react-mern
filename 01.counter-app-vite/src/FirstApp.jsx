import PropTypes from 'prop-types';

// const FirstApp = (props) => {
  //   const titulo = props.titulo;
const FirstApp = ({ titulo, texto }) => {
  
  return (
    <>
      <h1>{ titulo }</h1>
      <p>{ texto }</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, error esse labore magnam possimus est quo. Minima amet maxime, veniam ducimus molestiae et rerum, blanditiis, ipsam accusantium nesciunt id officia.</p>
    </>
  )
}

FirstApp.propTypes = {
  titulo: PropTypes.string.isRequired,
  texto: PropTypes.string
}

FirstApp.defaultProps = {
  titulo: 'Titulo por default',
  texto: 'Texto por defaultProps'
}

export default FirstApp