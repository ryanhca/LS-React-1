/*eslint no-unused-vars: "off"*/
import React from 'react';
import { render } from 'react-dom';
// You'll want to import the necessary components you want the App component to render

//const App = () => (
//    {
/* Replace this div with whatever components you want the App root component to render */
//        <div>HelloWorld!</div> 
//    });

class App extends React.Component {
  render() {
    return (
      <div>
        <br />
        <br />
          Hello World!
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
