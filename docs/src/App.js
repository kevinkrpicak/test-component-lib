import './App.css';

import {Button} from '@kevinkrpicak/test-component-lib';
import {Heading} from '@kevinkrpicak/test-component-lib'

function App() {
  return (
    <>
      <Heading as="h1">Test Component Page</Heading>
      <Heading as="h2">Test Component Page</Heading>
      <Heading as="h3">Test Component Page</Heading>
      <Heading as="h4">Test Component Page</Heading>
      <Heading as="h5">Test Component Page</Heading>
      <Heading as="h6">Test Component Page</Heading>
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
