import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  // console.log(todos);
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal></AddTodoModal>
        <TodoFilter></TodoFilter>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] space-y-3">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos.length > 0 ? (
            todos.map((todo) => <TodoCard todo={todo} key={todo?.id} />)
          ) : (
            <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
              <p>There is no task pending</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
