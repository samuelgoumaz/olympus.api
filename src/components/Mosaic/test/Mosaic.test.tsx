/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Mosaic from "../Mosaic";

/*
# Test
*/
describe("Mosaic", () => {
  test("renders the Button component", () => {
    render(
      <Mosaic
        title="Gelato Kush"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
