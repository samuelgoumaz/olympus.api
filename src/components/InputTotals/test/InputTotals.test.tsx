/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import InputTotals from "../InputTotals";

/*
# Test
*/
describe("InputTotals", () => {
  test("renders the Button component", () => {
    render(
      <InputTotals
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
