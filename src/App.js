import React from "react";
import { TodoScreen } from '../src/components/TodoScreen'
function App() {
  return (
    <div className="flex justify-center min-h-screen bg-blue-200">
      <div >
        <div className="flex justify-center bg-red-300">
          <text className="text-xl font-bold">
            THINGS TO DO:
          </text>
        </div>
        <div >
         <TodoScreen />
        </div>
      </div>
    </div>
  );
}

export default App;
