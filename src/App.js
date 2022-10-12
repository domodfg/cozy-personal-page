import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Mainpageleft from "./components/Mainpageleft.js";
import ProjectList from "./components/ProjectList.js";

function App() {
  return (
    <div className="App container-fluid">
      <Mainpageleft />
      <ProjectList />
    </div>
  );
}

export default App;
