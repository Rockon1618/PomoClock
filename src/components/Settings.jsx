import ReactSlider from "react-slider";
import "./slider.css";
import { useContext } from "react";
import SettingsContext from "./SettingsContext";

function Settings() {

  const settingsInfo = useContext(SettingsContext);
  return (
    <div style={{ textAlign: "left" }}>
      <h2>Settings:</h2>
      <label>Work Minutes: {settingsInfo.workMinutes}:00</label>
      <ReactSlider
        className={"slider"}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={settingsInfo.workMinutes}
        onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />
      <label>Break Minutes: {settingsInfo.breakMinutes}:00</label>
      
      <ReactSlider
        className={"slider-green"}
        thumbClassName={"thumb-green"}
        trackClassName={"track"}
        value={settingsInfo.breakMinutes}
        onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}
      />
    </div>
  );
}

export default Settings;
