/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Highlights from "../Highlights";

/*
# Test
*/
describe("Highlights", () => {
  test("renders the Button component", () => {
    render(
      <Highlights
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
