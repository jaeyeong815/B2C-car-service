import Router from './Router';
import { CarProvider } from './context/CarContext';
import GlobalStyle from './styles/GlobalStyle';

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
