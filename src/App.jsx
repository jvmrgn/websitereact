import "the-new-css-reset/css/reset.css";
import "./App.css";
import Banner from "./Components/Banner/Banner.jsx";
import AppBar from "./Components/AppBar/AppBar.jsx";
import Cards from "./Components/Cards/Cards.jsx";
import Description from "./Components/Description/Description.jsx";
import SecondBanner from "./Components/SecondBanner/SecondBanner.jsx";
import Form from "./Components/Form/Form.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <AppBar />
      <Banner />
      <Cards />
      <Description />
      <SecondBanner />
      <Form />
      <Footer />
    </>
  );
}

export default App;
