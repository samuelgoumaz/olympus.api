/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Popup from "../Popup";

/*
# Test
*/
describe("Popup", () => {
  test("renders the Button component", () => {
    render(
      <Popup
        label="Hello world!"
        name="visa"
      />
    );
  });
});
