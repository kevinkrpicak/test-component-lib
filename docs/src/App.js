import './App.css';

import {Button} from '@kevinkrpicak/test-component-lib';
import {H1} from '@kevinkrpicak/test-component-lib'

function App() {
  return (
    <>
      <H1>Test Component Page</H1>
      <Button
        className="foo"
        style={{ padding: "10px" }}
        label="Imported Button!"
      />
      <Button
        as="a"
        className="bar me-2"
        data-foo="bar"
        label="Imported Button!"
      />
      <Button as="div" className="foo bar" label="Imported Button!" />

      <div className="d-flex justify-content-between">
        <Button className="foo flex-grow-1" label="Imported Button!" />
        <Button as="a" className="flex-grow-1" label="Imported Button!" />
        <Button
          as="div"
          className="foo bar flex-grow-1"
        >Child Content</Button>
      </div>
    </>
  );
}

export default App;
