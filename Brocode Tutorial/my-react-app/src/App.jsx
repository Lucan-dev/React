import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'

function App() {

  return (
    // Enclose app elements in a fragment tag
    // React only allows you to return a single component
    <>
      <Header></Header>
      <Button></Button>
      <Card></Card>
      <Card />
      <Card />
      <Card />
      <Food></Food>
      <Food /> {/* Shortened Syntax */}
      <Footer></Footer>
    </>
  );
}

export default App