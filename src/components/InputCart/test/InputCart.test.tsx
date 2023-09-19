/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import InputCart from "../InputCart";

/*
# Test
*/
describe("InputCart", () => {
  test("renders the Button component", () => {
    render(
      <InputCart
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
