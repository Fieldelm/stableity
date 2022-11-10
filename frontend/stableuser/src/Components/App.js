
import '../style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../pics/horse.png';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'


function App() {



const languages = [
  {
    code: 'hu',
    name: 'Magyar',
    country_code: 'hu',
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  }
]
const { t } = useTranslation();

  return (
    <div className="App">
      <Header />
        <Container fluid>
          <img src={logo} className='main_logo' alt="logo" />
          <h1 className="font-weight-normal mb-3">{t('welcome_msg')}</h1>
        </Container>
      
    </div>
  );
}

export default App;
