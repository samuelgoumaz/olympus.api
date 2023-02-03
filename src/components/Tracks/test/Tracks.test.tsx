/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Tracks from "../Tracks";

/*
# Test
*/
describe("Tracks", () => {
  test("renders the Button component", () => {
    render(
      <Tracks
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
