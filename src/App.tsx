import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container/index.tsx';
import { Heading } from './components/Heading/index.tsx';

export function App() {
  return (
    <>
      <Container>
        <Heading>LOGO</Heading>
      </Container>

      <Container>
        <Heading>MENU</Heading>
      </Container>
    </>
  );
}
