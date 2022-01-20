import React from "react";
import { TodoScreen } from '../src/components/TodoScreen'
function App() {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="mt-12">
        <div className="flex justify-center border-b border-slate-300 pb-1">
          <text className="text-xl">
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
