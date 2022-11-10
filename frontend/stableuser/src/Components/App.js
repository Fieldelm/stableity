
import '../style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../pics/horse.png';
import Container from 'react-bootstrap/Container';
import Header from './Header';


function App() {


  return (
    <div className="App">
      <Header />
        <Container fluid>
          <img src={logo} className='main_logo' alt="logo" />

        </Container>
      
    </div>
  );
}

export default App;
