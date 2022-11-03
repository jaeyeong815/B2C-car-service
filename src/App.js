import Router from './Router';
import { CarProvider } from './context/CarContext';
import GlobalStyle from './styles/GlobalStyle';
import MetaTag from './components/MetaTag';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <CarProvider>
        <Router />
      </CarProvider>
    </div>
  );
}

export default App;
