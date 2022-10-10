/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Fx2dBox from "../Fx2dBox";

/*
# Test
*/
describe("Fx2dBox", () => {
  test("renders the Button component", () => {
    render(
      <Fx2dBox
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
