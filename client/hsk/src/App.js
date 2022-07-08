import React, { useState, useEffect } from "react"
import { Routes, Route } from 'react-router-dom';
import Event from "./routes/event/event.routes";
import Activity from "./routes/activity/activity.routes";
import Place from "./routes/place/place.routes";
import Header from "./components/header/header.component";


function App() {


  return (
    <div >
      <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Place />} />
        <Route path='events' element={<Event />} />
        <Route path='activities' element={<Activity />} />
      </Route>
    </Routes>

    </div>
  );
}

export default App;
