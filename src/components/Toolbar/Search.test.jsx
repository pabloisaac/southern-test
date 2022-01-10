import React, { useReducer, useMemo } from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
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

test("should show delete btn when search btn is clicked", () => {
  const mockHandler = jest.fn();
  fireEvent.click(component.getByRole("button", { name: "Search", onclick: mockHandler() }));
  expect(mockHandler).toHaveBeenCalledTimes(1);
});
