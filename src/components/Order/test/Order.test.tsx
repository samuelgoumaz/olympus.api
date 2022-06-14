/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Order from "../Order";

/*
# Test
*/
describe("Order", () => {
  test("renders the Button component", () => {
    render(
      <Order
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
