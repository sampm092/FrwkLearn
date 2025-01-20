import React from 'react'
import './App.css'


const App = () => {
  // DENGAN JSX
  // return (
  // <div>
  //   <section className='h-screen bg-red-600 text-xl'>
  //     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, saepe! Incidunt natus explicabo fuga. Assumenda maxime ea perspiciatis, ducimus nam dolores sapiente blanditiis quas aut nihil placeat fuga, reprehenderit quae.</p>
  //     <h1 className='bg-randomClor'>Random color</h1>
  //     <div className="exampleCard">hey</div>
  //   </section>
  // </div>
  // )
  // }



  // TANPA JSX
  return React.createElement(
    "div",
    null,
    React.createElement(
      "section",
      {className:"h-screen bg-red-600 text-xl"},
      React.createElement(
        "p",
        null,
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, saepe! Incidunt natus explicabo fuga. Assumenda maxime ea perspiciatis, ducimus nam dolores sapiente blanditiis quas aut nihil placeat fuga, reprehenderit quae."
      ),
      React.createElement(
        "h1",
        {className:'bg-randomClor'},
        "Random color."
      ),
      React.createElement(
        "div",
        {className:'randomClor'},
        "hey."
      )
    )
  )
}
  export default App
