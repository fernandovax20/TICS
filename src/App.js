import './App.css';
import Simualador from './views/Simulador';
import AfpProvider from './context/provider';

function App() {

  return (
    <AfpProvider>
      <Simualador />
    </AfpProvider>
  );
}

export default App;
