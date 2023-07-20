import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Content } from './components/content';
import { Menu } from './components/menu';
import { globalContext } from './context/globalContext';
import { useContext, useEffect } from 'react';

function App() {
  const { state } = useContext(globalContext);
  console.log(state);

  useEffect(() => {
    console.log(state.logado);
}, [state]);


  return (
    <BrowserRouter>
        {state.logado ? <Menu /> : false}
        <Content />
    </BrowserRouter>
  );
}

export default App;
