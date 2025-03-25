/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Trade from "../Trade";

/*
# Test
*/
describe("Trade", () => {
  test("renders the Button component", () => {
    render(
      <Trade
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
