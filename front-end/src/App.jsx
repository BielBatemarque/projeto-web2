import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Content } from './components/content';
import { Menu } from './components/menu';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Menu />
        <h1>Projeto react</h1>
      <Content />
    </div>
    </BrowserRouter>
  );
}

export default App;
