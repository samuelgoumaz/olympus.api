/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Slider from "../Slider";

/*
# Test
*/
describe("Slider", () => {
  test("renders the Button component", () => {
    render(
      <Slider
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
