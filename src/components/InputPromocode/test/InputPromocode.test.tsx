/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import InputPromocode from "../InputPromocode";

/*
# Test
*/
describe("InputPromocode", () => {
  test("renders the Button component", () => {
    render(
      <InputPromocode
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
