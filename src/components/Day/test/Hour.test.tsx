/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Day from "../Day";

/*
# Test
*/
describe("Day", () => {
  test("renders the Button component", () => {
    render(
      <Day
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
