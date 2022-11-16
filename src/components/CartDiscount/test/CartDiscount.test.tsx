/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import CartDiscount from "../CartDiscount";

/*
# Test
*/
describe("CartDiscount", () => {
  test("renders the Button component", () => {
    render(
      <CartDiscount
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
