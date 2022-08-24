import React from 'react'
import { Link as LinkRouter } from 'react-router-dom';

const Header = () => {
  return (
    <>
         <header className="container-header">
        <img src="https://media.istockphoto.com/vectors/vector-challenge-sign-pop-art-comic-speech-bubble-with-expression-vector-id1266413326?k=20&m=1266413326&s=612x612&w=0&h=NgPOG1Fc-2qAuMYIfm5RKz3kXNk8NSFF5V6jfw1ubWk=" alt="logo"/>

        <nav className="navbar navbar-light">
            <div className="container-fluid">

              <LinkRouter  onClick={()=>{window.scrollTo(0,0);}} to="/"><a className="navbar-brand btn btn-dark" href="#">Tabla</a></LinkRouter>
              <LinkRouter  onClick={()=>{window.scrollTo(0,0);}} to="/formulario"> <a className="navbar-brand btn btn-dark" href="./pages/pastEvents.html">Formulario</a></LinkRouter> 
                
            </div>
          </nav>
          
    </header>
    </>
  )
}

export default Header