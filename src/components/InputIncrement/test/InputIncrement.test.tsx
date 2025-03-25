/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import InputIncrement from "../InputIncrement";

/*
# Test
*/
describe("InputIncrement", () => {
  test("renders the Button component", () => {
    render(
      <InputIncrement
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
