import ReactSlider from "react-slider";
import "./slider.css";

function Settings() {
  return (
    <div style={{ textAlign: "left" }}>
      <h2>Settings:</h2>
      <label>Work Minutes:</label>
      <ReactSlider
        className={"slider"}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={45}
        min={1}
        max={120}
      />
      <label>Break Minutes:</label>
      <label>Work Minutes:</label>
      <ReactSlider
        className={"slider-green"}
        thumbClassName={"thumb-green"}
        trackClassName={"track"}
        value={45}
        min={1}
        max={120}
      />
    </div>
  );
}

export default Settings;