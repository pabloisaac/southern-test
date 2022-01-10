import React, { useReducer, useMemo } from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import { initialState, reducer, AppContext } from "../../store/reducer";
import Logo from "../Header/Logo";
import Toolbar from "./Toolbar";
import PhotoViewer from "../Photo/PhotoViewer";

let component;

beforeEach(() => {
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
  component = render(<App />);
});

test("Should allow numbers to be inputted", () => {
  const input = component.getByLabelText(/Sol Date/i);
  fireEvent.change(input, { target: { value: "1000" } });
  expect(input.value).toBe("1000");
});
