import React from "react";
import { Routes, Route } from "react-router-dom";


import Mainpage_container from "./mainpage_container";
import Createmessage_container from "./CreateMessage/createmessage_container";
import Messageshow_container from "./MessageShow/messageshow_container";

const App = () => (
  <div>
    <Routes>
      <Route exact path="/" element={<Mainpage_container />} />
      <Route exact path="/messages/:messageId" element={<Messageshow_container />}/>
    </Routes>
  </div>
);

export default App;
