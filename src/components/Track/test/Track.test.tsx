/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Track from "../Track";

/*
# Test
*/
describe("Track", () => {
  test("renders the Button component", () => {
    render(
      <Track
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
