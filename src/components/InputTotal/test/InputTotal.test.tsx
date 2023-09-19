/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import InputTotal from "../InputTotal";

/*
# Test
*/
describe("InputTotal", () => {
  test("renders the Button component", () => {
    render(
      <InputTotal
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
