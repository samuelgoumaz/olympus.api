/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Variant from "../Variant";

/*
# Test
*/
describe("Variant", () => {
  test("renders the Button component", () => {
    render(
      <Variant
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
