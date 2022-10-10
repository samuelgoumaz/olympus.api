/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import FxImage from "../FxImage";

/*
# Test
*/
describe("FxImage", () => {
  test("renders the Button component", () => {
    render(
      <FxImage
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
