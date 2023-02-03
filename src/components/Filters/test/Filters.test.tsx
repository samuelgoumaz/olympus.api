/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Filters from "../Filters";

/*
# Test
*/
describe("Filters", () => {
  test("renders the Button component", () => {
    render(
      <Filters
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
