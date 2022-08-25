// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import  NxWelcome  from './nx-welcome';
import  { Button } from "ui"
import { OneKSvg } from "ui"

export function App() {
  return (
    <div>
      <Button variant="black" size="large" text="imported button" />
      <OneKSvg />
      <NxWelcome title='Hello'/>
    </div>
  );
}

export default App;
