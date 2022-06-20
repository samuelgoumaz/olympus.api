/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import FxBackground from "../FxBackground";

/*
# Test
*/
describe("FxBackground", () => {
  test("renders the Button component", () => {
    render(
      <FxBackground
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
