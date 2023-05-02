/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Articles from "../Articles";

/*
# Test
*/
describe("Articles", () => {
  test("renders the Button component", () => {
    render(
      <Articles
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
