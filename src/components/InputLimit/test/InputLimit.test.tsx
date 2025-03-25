/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import InputLimit from "../InputLimit";

/*
# Test
*/
describe("InputLimit", () => {
  test("renders the Button component", () => {
    render(
      <InputLimit
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
