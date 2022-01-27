// COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
// PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import "./styles.scss";

function App() {
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  const URL = "https://cd-portfolio-backend.herokuapp.com/";

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects URL={URL} />
          </Route>
          <Route path="/about">
            <About URL={URL} />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;