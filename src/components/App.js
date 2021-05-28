import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Heading from "./Heading/Heading";
import Footer from "./Footer/Footer";
import Services from "./OurServices/Services";
import Home from "./Home/Home";
import ContactForm from "./Contact/ContactForm";
import AboutUs from "./AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <Router>
        <Heading className="heading" />
        <div className="content">
          <Switch>
            <Route path="/contact">
              <ContactForm />
            </Route>
            <Route path="/about-us">
              <AboutUs />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
          </Switch>
        </div>
        <Footer className="footer" />
      </Router>
    </div>
  );
}

export default App;
