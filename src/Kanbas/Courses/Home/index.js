import ModuleList from "../Modules/ModuleList";
import ModButtons from "../Modules/ModButtons";
import Status from "./Status";

function Home() {
  return (
    <div className="row">
        <div className="col-10">
            <h2>Module</h2>
            <ModButtons />
            <ModuleList />
        </div>
        <div className="col-2">
        <Status
 />
        </div>
    </div>
  );
}
export default Home;