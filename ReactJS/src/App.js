import './App.css';
import React, { useState, createContext } from 'react';
// import Counter from './components/counter';
// import ReactHooks from './components/ReactHooks';
// import HookObject from './components/HookObject';
// import HookArray from './components/HookArray';
// import EffectHooks from './components/EffectHooks';
// import FetchApi from './components/FetchApi';
import UseContext from './components/UseContext';

export const AppContext = createContext()

function App() {
  const [value, setValue] = useState("Subscribe to our channel")

  return (
    <AppContext.Provider value={{ value, setValue }}>
      {/* <ReactHooks /> */}
      {/* <HookObject /> */}
      {/* <HookArray /> */}
      {/* <Counter /> */}
      {/* <EffectHooks /> */}
      {/* <FetchApi /> */}
      <UseContext />
    </AppContext.Provider>
  )
}

export default App;