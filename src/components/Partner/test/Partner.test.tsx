/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Partner from "../Partner";

/*
# Test
*/
describe("Partner", () => {
  test("renders the Button component", () => {
    render(
      <Partner
        title="Gelato Kush"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
