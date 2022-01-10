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

test("should search a curiosity button and that allow clicked", () => {
  const mockHandler = jest.fn();
  fireEvent.click(component.getByRole("button", { name: "Curiosity", onclick: mockHandler() }));
  expect(mockHandler).toHaveBeenCalledTimes(1);
});

test("should search a opportunity button and that allow clicked", () => {
  const mockHandler = jest.fn();
  fireEvent.click(component.getByRole("button", { name: "Opportunity", onclick: mockHandler() }));
  expect(mockHandler).toHaveBeenCalledTimes(1);
});

test("should search a spirit button and that allow clicked", () => {
  const mockHandler = jest.fn();
  fireEvent.click(component.getByRole("button", { name: "Spirit", onclick: mockHandler() }));
  expect(mockHandler).toHaveBeenCalledTimes(1);
});
