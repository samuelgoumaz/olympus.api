/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Menu from "../Menu";

/*
# Test
*/
describe("Menu", () => {
  test("renders the Button component", () => {
    render(
      <Menu
      />
    );
  });
});
