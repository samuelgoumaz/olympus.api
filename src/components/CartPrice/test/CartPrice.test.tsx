/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import CartPrice from "../CartPrice";

/*
# Test
*/
describe("CartPrice", () => {
  test("renders the Button component", () => {
    render(
      <CartPrice
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
