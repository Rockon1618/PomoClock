import './App.css'
import Timer from './components/Timer';
import Settings from './components/Settings';
import {useState} from "react";
import SettingsContext from "./components/SettingsContext";

function App() {

  const [showSettings, setShowSettings] = useState(true);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMiuntes] = useState(15);

  return (
    <>
     <main>
        <SettingsContext.Provider value={{
            workMinutes,
            breakMinutes,

            setWorkMinutes, 
            setBreakMiuntes,

        }}>
        {showSettings ? <Settings /> : <Timer />} 
        </SettingsContext.Provider>
        {/* <Settings />
        <Timer /> */}
     </main>
    </>
  );
}

export default App;
