import React, { useReducer, useMemo } from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { reducer, AppContext } from "../../store/reducer";
import Logo from "../Header/Logo";
import Toolbar from "./Toolbar";
import PhotoViewer from "../Photo/PhotoViewer";
import * as Constants from "../../utils/constants";

let component;

beforeEach(() => {
  function App() {
    const initialState = {
      photos: [],
      rover_type: Constants.CURIOSITY,
      camera_type: null,
      earth_date: null,
      sol_date: 0,
      query: {
        rover: null,
        sol: 0,
        camera: null,
        earth_date: null,
      },
    };

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
  component = render(<App />);
});

test("Should show options for curiosity rover", () => {
  component.getByText(/Front Hazard Avoidance Camera/i);
  component.getByText(/Rear Hazard Avoidance Camera/i);
  component.getByText(/Mast Camera/i);
  component.getByText(/Chemistry and Camera Complex/i);
  component.getByText(/Mars Hand Lens Imager/i);
  component.getByText(/Mars Descent Imager/i);
  component.getByText(/Navigation Camera/i);
});
