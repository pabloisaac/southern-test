import React, { useReducer, useMemo } from "react";
import { initialState, reducer, AppContext } from "./store/reducer";
import Logo from "./components/Header/Logo";
import Toolbar from "./components/Toolbar/Toolbar";
import PhotoViewer from "./components/Photo/PhotoViewer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({
    state, dispatch,
  }), [state]);

  return (
    <AppContext.Provider value={value}>
      <div>
        <Logo />
        <Toolbar />
        <PhotoViewer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
