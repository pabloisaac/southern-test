import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import App from "./App";

let component;

beforeEach(() => {
  component = render(<App />);
});

test("should renders a rovers types btn", () => {
  expect(component.getByText(/Curiosity/i)).toBeInTheDocument();
  expect(component.getByText(/Opportunity/i)).toBeInTheDocument();
  expect(component.getByText(/Spirit/)).toBeInTheDocument();
});

test("should renders a earth date", () => {
  expect(component.getByLabelText(/Earth Date/i)).toBeInTheDocument();
});

test("should renders a sol date", () => {
  expect(component.getByLabelText(/Sol Date/i)).toBeInTheDocument();
});

test("should renders a search btn", () => {
  expect(component.getByText(/search/i)).toBeInTheDocument();
});

test("should search for btn to disabled when rover type was not selected", () => {
  expect(component.getByRole("button", { name: /search/i })).toBeDisabled();
});

test("should search a button that does not allow click", () => {
  const mockHandler = jest.fn();
  const button = component.getByRole("button", { name: /search/i });
  fireEvent.click(button);
  expect(mockHandler.mock.calls).toHaveLength(0);
});
