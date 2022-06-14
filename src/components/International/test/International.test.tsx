/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import International from "../International";

/*
# Test
*/
describe("International", () => {
  test("renders the Button component", () => {
    render(
      <International
        label="Hello world!"
      />
    );
  });
});
