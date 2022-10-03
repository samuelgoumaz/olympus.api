/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import FxGradient from "../FxGradient";

/*
# Test
*/
describe("FxGradient", () => {
  test("renders the Button component", () => {
    render(
      <FxGradient
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
