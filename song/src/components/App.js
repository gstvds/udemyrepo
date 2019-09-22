import React from "react";
// The curly braces is required for named imports (When you call export in front a function)

import SongDetail from "./SongDetail";
import SongList from "./SongList";

const App = () => {
  return (
    <div className='ui container grid'>
      <div className='ui row'>
        <div className='column eight wide'>
          <SongList />
        </div>
        <div className='column eight wide'>
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
