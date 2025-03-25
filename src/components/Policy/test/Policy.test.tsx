/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Policy from "../Policy";

/*
# Test
*/
describe("Policy", () => {
  test("renders the Button component", () => {
    render(
      <Policy
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
