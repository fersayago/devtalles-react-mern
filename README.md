# Sección 1: Introducción al curso

[React: De cero a ( Hooks y MERN )](https://www.udemy.com/course/react-cero-experto)

## Instalaciones necesarias
- VS Code
- React Developer Tools
- Redux Devtools
- Postman
- MongoDB Compass
- Git
- Node

# Sección 2: Introducción a React y conceptos generales
**Conceptos a aprender en esta sección:**
- ¿Que es React?
- Conceptos generales
- Babel
- JSX

## React
Es una **librería** que permite crear aplicaciones. Esta hecho para trabajar con aplicaciones de todo tipo de magnitud, ya sea aplicaciones sencillas, intermedias o robustas con alto nivel de interactividad. Al ser _declarativa_ es fácil seguir patrones de diseño. Muy _eficiente_. React trabaja de manera _predecible_. Trabaja con componentes que son pequeñas piezas de código y simple y sencillo.
Otras caracteristicas interesantes de React son que nos permite trabajar con server-side rendering con Node y que también se puede trabajar en aplicaciones móviles con React Native.
```javascript
const divRoot = document.querySelector('#root');

const h1Tag = <h1>Hola mundo</h1>

ReactDOM.render( h1Tag, divRoot );
```

# Sección 3: Introducción a JavaScript moderno
**Puntos clave de la sección:**
- Generar la base sobre Javascript
- Constantes y variables let
- Template string
- Objetos literales
- Arreglos
- Desestructuración de objetos
- Promesas
- Fetch API
- Ternarios
- Async - Await

# Sección 4: Primeros pasos en React
**Puntos clave de la sección:**
- Nuestra primera aplicación - Hola Mundo
- Exposiciones sobre los componentes
- Creación de componentes (Functional Componentes)
- Propiedades - Props
- Impresiones en el HTML
- PropTypes
- DefaultProps
- Introducción general a los Hooks
- useState

## Componente
Cuando hablamos de componente nos referimos a un bloque de código aislado que puede tener estado o no. Un componente puede contener múltiples componentes dentro llamados componentes hijos. Esto convierte al DOM en un árbol de componentes.
Cuando nos referimos a que el componente puede tener un estado nos referimos a la información del componente en un tiempo especifico.

## Vite vs create-react-app
Create React App permite crear un proyecto base de React usando webpack con una configuración ya realizada con jest y otras librerías. Vite utiliza otra forma para hacer los cambios de módulos que es mas rápido que webpack. Para proyectos grandes vite ofrece una experiencia mas amigable.

# Sección 5: Pruebas unitarias y de integración
**Puntos clave de la sección:**
- Introducción a las pruebas
- AAA
  - Arrange - Arreglar
  - Act - Actuar
  - Assert - Afirmar
- Primeras pruebas
- Jest
- Expect
- toBe
- Enzyme
- Comandos útiles en la terminal para pruebas
- Revisar elementos renderizados en el componente
- Simular eventos

Esta sección de pruebas es sumamente importante porque nos dará la base de las pruebas que estaremos haciendo durante el curso, las pruebas irán creciendo en complejidad, por lo que les recomiendo que nos aseguremos de comprender bien todos estos conceptos para que nos sea más fácil las siguientes secciones de pruebas.