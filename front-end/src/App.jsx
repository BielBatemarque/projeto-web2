import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Content } from './components/content';
import { Menu } from './components/menu';

function App() {
  return (
    <BrowserRouter>
       <Menu />
      <Content />
    </BrowserRouter>
  );
}

export default App;
