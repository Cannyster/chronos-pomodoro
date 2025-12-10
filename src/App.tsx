import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading/Heading';
import { Body } from './components/Body/Body';

export function App() {
  console.log('Hello');
  return (
    <>
      <Heading />
      <Body />
    </>
  );
}
