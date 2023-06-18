import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Content } from './components/content';

function App() {
  return (
    <BrowserRouter>
      <Content />
    </BrowserRouter>
  );
}

export default App;
