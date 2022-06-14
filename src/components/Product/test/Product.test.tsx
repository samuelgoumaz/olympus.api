/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Product from "../Product";

/*
# Test
*/
describe("Product", () => {
  test("renders the Button component", () => {
    render(
      <Product
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
