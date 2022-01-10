import React, { useReducer, useMemo } from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { initialState, reducer, AppContext } from "../../store/reducer";
import Toolbar from "./Toolbar";

test("renders its children", () => {
  function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = useMemo(() => ({
      state, dispatch,
    }), [state]);

    return (
      <AppContext.Provider value={value}>
        <div>
          <Toolbar />
        </div>
      </AppContext.Provider>
    );
  }

  const component = render(<App />);

  component.getByText("Curiosity");
  component.getByText("Opportunity");
  component.getByText("Spirit");
  component.getByText((content, element) => element.tagName.toLowerCase() === "span" && content.startsWith("Earth"));
  component.getByText((content, element) => element.tagName.toLowerCase() === "span" && content.startsWith("Sol"));
  component.getByText("Search");
});
