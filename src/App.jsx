import './App.css'
import Timer from './components/Timer';
import Settings from './components/Settings';
import {useState} from "react";


function App() {

  const [showSettings, setShowSettings] = useState(true);

  return (
    <>
     <main>
        {showSettings ? <Settings /> : <Timer />}
        {/* <Settings />
        <Timer /> */}
     </main>
    </>
  );
}

export default App;
