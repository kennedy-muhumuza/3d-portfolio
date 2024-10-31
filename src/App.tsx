import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import TrialThree from "./components/trial/TrialThree";
import TrialSphere from "./components/trial/TrialSphere";

const App = () => {
  return (
    <BrowserRouter>
      {/* <div className="h-96 w-full">
        <TrialThree />
        <TrialSphere />
      </div> */}
      <div className="relative z-0 bg-primary flex flex-col mt-0 gap-2">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
