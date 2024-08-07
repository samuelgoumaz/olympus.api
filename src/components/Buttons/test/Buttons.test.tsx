/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Buttons from "../Buttons";

/*
# Test
*/
describe("Buttons", () => {
  test("renders the Button component", () => {
    render(
      <Buttons
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
