import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container/index.tsx';
import { Logo } from './components/Logo/index.tsx';
import { Menu } from './components/Menu/index.tsx';
import { CountDown } from './components/CountDown/index.tsx';
import { DefaultInput } from './components/DefaultInput/index.tsx';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput type='text' id={'menuInput'} label='Task' />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <p>Ciclos</p>
            <p> 0 0 0 0 0 </p>
          </div>

          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
