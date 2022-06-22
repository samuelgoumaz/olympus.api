/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Article from "../Article";

/*
# Test
*/
describe("Article", () => {
  test("renders the Button component", () => {
    render(
      <Article
        title="Gelato Kush"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
