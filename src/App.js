import Header from "./Header";
import Challenge from "./Challenge";
import UiChange from "./UiChange";

import Closing from "./Closing";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Challenge />
      <UiChange />
      <section>Section for audial check</section>
      <Closing />
      <Footer />
    </div>
  );
}

export default App;
