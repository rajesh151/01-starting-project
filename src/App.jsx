import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data.js";

function App() {
  function handleButtonOnClick(selectedButton) {
    console.log(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts!!</h2>
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClickFunc={() => handleButtonOnClick('Components')}>Components</TabButton>
            <TabButton onClickFunc={() => handleButtonOnClick('JSX')}>JSX</TabButton>
            <TabButton onClickFunc={() => handleButtonOnClick('props')}>PROPS</TabButton>
            <TabButton onClickFunc={() => handleButtonOnClick('State')}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
