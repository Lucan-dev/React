import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'

function App() {

  return (
    // Enclose app elements in a fragment tag
    // React only allows you to return a single component
    <>
      <Header></Header>
      <Food></Food>
      <Food></Food>
      <Footer></Footer>
    </>
  );
}

export default App