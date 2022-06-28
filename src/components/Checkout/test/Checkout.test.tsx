/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Checkout from "../Checkout";

/*
# Test
*/
describe("Checkout", () => {
  test("renders the Button component", () => {
    render(
      <Checkout
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
