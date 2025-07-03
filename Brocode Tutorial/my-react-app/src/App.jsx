import Student from './Student'

function App() {

  return (
    // Enclose app elements in a fragment tag
    // React only allows you to return a single component
    <>
      {/*Use curly braces to store value that isn't a string*/}
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Patrick" age={41} isStudent={true}/>
      <Student name="Squidward" age={100} isStudent={true}/>
      <Student />
    </>
  );
}

export default App