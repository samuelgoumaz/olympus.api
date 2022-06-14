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
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
