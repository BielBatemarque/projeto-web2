import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Content } from './components/content';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Content />
        <h1>Projeto react</h1>
    </div>
    </BrowserRouter>
  );
}

export default App;
