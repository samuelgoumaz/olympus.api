/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import InputSubmit from "../InputSubmit";

/*
# Test
*/
describe("InputSubmit", () => {
  test("renders the Button component", () => {
    render(
      <InputSubmit
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
