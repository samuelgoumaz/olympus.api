/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Card from "../Card";

/*
# Test
*/
describe("Card", () => {
  test("renders the Button component", () => {
    render(
      <Card
        title="Gelato Kush"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
