import './App.css';
import { Homepage } from './Components/Home/Homepage';
import { ResumePage } from './Components/Resume/ResumePage';
import { NavigationBar } from './Components/Navigation/NavigationBar';
import { Route, Routes } from 'react-router-dom';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useState,useEffect,useMemo } from "react";
import { ContactsPage } from './Components/Contact/Contacts';
import { WorkPage } from './Components/Work/WorkPage';

function App() {
  const [init, setInit] = useState(false);
  const backgroundColor = "#0A1828";
  useEffect(() => {
initParticlesEngine(async (engine) => {
  await loadSlim(engine);
}).then(() => {
  setInit(true);
});
},[]);



const particlesLoaded = (container) => {
console.log(container);
};

const options = useMemo(
() => ({
  background: {
    color: {
      value: backgroundColor,  /* only use hex values*/
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
}),
[backgroundColor],
);
  return (
    <div className="App">
       {
      init?
      <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      />:null
  }
     <NavigationBar className="navbar" /> 
      <Routes>
           <Route path='/' element={<Homepage />}/>
           <Route path='/resume' element={<ResumePage />}/>
           <Route path='/contact' element={<ContactsPage />}/>
           <Route path='/work' element={<WorkPage />}/>
      </Routes>      
    </div>
  );
}

export default App;
