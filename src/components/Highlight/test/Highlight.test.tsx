/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Highlight from "../Highlight";

/*
# Test
*/
describe("Highlight", () => {
  test("renders the Button component", () => {
    render(
      <Highlight
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
