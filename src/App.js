import Header from "./Header";
import Challenge from "./Challenge";

import Closing from "./Closing";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Challenge />
      <section>Section for UI change feature</section>
      <section>Section for audial check</section>
      <Closing />
      <Footer />
    </div>
  );
}

export default App;
