import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Mainpageleft from "./components/Mainpageleft.js";
import ProjectList from "./components/ProjectList.js";

function App() {
  return (
    <div className="App container">
      <Mainpageleft />
      <ProjectList />
      <div></div>
    </div>
  );
}

export default App;
