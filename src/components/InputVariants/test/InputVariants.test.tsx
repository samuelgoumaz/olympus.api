/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import InputVariants from "../InputVariants";

/*
# Test
*/
describe("InputVariants", () => {
  test("renders the Button component", () => {
    render(
      <InputVariants
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
