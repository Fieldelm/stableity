
import './style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './pics/horse.png';
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container fluid>
          <img src={logo} className='main_logo' alt="logo" />

        </Container>
      </header>
    </div>
  );
}

export default App;
