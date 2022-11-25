import "./App.css";
import { Illustration } from "./components/illustration";
import { Production } from "./components/production_info";
import { Technical } from "./components/technical_spec";
import { Location } from "./components/location";
import { Usage } from "./components/usage";

function App() {
  return (
    <div className="App">
      <header className="flex h-[50px] items-center justify-center lg:h-[100px]">
        <h1 className="header select-none text-5xl text-sky-600">
          Deathstar II
        </h1>
      </header>
      <main className="mt-[20px] flex w-full flex-col items-center justify-center lg:mt-[200px] lg:flex-row-reverse">
        <Illustration />
        <div className="flex-col items-center justify-center">
          <div className="information h-[500px] touch-auto overflow-auto scroll-smooth">
            <Production />
            <Technical />
            <Location />
            <Usage />
          </div>
          <div className="mt-2 text-center">
            <a
              className="italic text-sky-500 hover:underline"
              target="blank"
              href="https://starwars.fandom.com/wiki/DS-2_Death_Star_II_Mobile_Battle_Station"
            >
              Source
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
