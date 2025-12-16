import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container/index.tsx';
import { Logo } from './components/Logo/index.tsx';
import { Menu } from './components/Menu/index.tsx';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>
    </>
  );
}
