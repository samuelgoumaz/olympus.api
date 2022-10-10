/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Error from "../Error";

/*
# Test
*/
describe("Error", () => {
  test("renders the Button component", () => {
    render(
      <Error
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
