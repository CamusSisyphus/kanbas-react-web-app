import AddRedux from "./AddRedux";
import CounterRedux from "./CounterRedux";
import HelloRedux from "./HelloRedux";
import TodoList from"./todos/TodoList.js";

function ReduxExamples() {

    return (
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux />
      <AddRedux />
      <CounterRedux />
      <TodoList />
    </div>
  );
}
export default ReduxExamples;