import ModuleList from "./ModuleList";
import ModButtons from "./ModButtons";
function Modules() {
  return (
    <div class= "container-fluid">
      <h2>Modules</h2>

      <ModButtons />
      <ModuleList />
    </div>
  );
}
export default Modules;