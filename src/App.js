import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { main as mainConfig } from './router/index'
import { RenderRoutes } from './router/utils/RenderRoutes'
import { Component } from 'react';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <RenderRoutes routes={mainConfig}></RenderRoutes>
          </div>
        </Router>
    );
  }
}
export default App;
