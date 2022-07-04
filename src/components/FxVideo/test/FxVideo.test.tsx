/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import FxVideo from "../FxVideo";

/*
# Test
*/
describe("FxVideo", () => {
  test("renders the Button component", () => {
    render(
      <FxVideo
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
