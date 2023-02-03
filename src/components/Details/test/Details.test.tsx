/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Details from "../Details";

/*
# Test
*/
describe("Details", () => {
  test("renders the Button component", () => {
    render(
      <Details
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
