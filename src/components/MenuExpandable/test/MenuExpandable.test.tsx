/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import MenuExpandable from "../MenuExpandable";

/*
# Test
*/
describe("MenuExpandable", () => {
  test("renders the Button component", () => {
    render(
      <MenuExpandable
      />
    );
  });
});
