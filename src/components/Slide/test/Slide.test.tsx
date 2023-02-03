/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Slide from "../Slide";

/*
# Test
*/
describe("Slide", () => {
  test("renders the Button component", () => {
    render(
      <Slide
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
