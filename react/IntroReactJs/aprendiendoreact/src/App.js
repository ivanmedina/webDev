import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//importar componentes



import MyComponent from './components/MyComponent';
function HelloWorld(name,age)
{
  var presentation = (
    <div>
        <h2>Hello Im {name}</h2>
        <h3>Im {age} years old </h3>
    </div>
  );

  return presentation;
}


function App() {

  var name = "Ivan Medina";
  var age= 22;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
          {HelloWorld(name, age)}
          <section className="components">
          <MyComponent/>
          </section>

      </header>
    </div>
  );
}

export default App;
