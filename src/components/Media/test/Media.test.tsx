/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Media from "../Media";

/*
# Test
*/
describe("Media", () => {
  test("renders the Button component", () => {
    render(
      <Media
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
