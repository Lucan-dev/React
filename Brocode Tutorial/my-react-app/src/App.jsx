import Greeting from './Greeting.jsx'

function App() {

  return (
    // Enclose app elements in a fragment tag
    // React only allows you to return a single component
    <>
      <Greeting isLoggedIn={true} username="Toucan"/>
      <Greeting isLoggedIn={false} username="Toucan"/>
      <Greeting/>
    </>
  );
}

export default App