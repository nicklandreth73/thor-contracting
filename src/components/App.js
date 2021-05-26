import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Heading from "./Heading/Heading";
import Footer from "./Footer/Footer";
import ContactForm from "./Contact/ContactForm";

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
          </Switch>
        </div>
        <Footer className="footer" />
      </Router>
    </div>
  );
}

export default App;
