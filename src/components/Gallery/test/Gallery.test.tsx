/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Gallery from "../Gallery";

/*
# Test
*/
describe("Gallery", () => {
  test("renders the Button component", () => {
    render(
      <Gallery
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
