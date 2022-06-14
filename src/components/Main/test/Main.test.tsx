/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Main from "../Main";

/*
# Test
*/
describe("Main", () => {
  test("renders the Button component", () => {
    render(
      <Main
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
