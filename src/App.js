import React, { Component } from 'react';

import './styles.css';

import Header from './components/Header';
import Main from './pages/main';

/* definindo o App com funcao utilizando stateless component:
*/
const App = () => (
  <div className="App">
    <Header/>
    <Main/>
  </div>
);

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1><center> Hellow camarada! </center></h1> 
      </div>
    );
  }
}
*/

export default App;
