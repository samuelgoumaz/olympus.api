/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Products from "../Products";

/*
# Test
*/
describe("Products", () => {
  test("renders the Button component", () => {
    render(
      <Products
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
