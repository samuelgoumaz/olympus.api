/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import InputRadio from "../InputRadio";

/*
# Test
*/
describe("InputRadio", () => {
  test("renders the Button component", () => {
    render(
      <InputRadio
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
