/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Tab from "../Tab";

/*
# Test
*/
describe("Tab", () => {
  test("renders the Button component", () => {
    render(
      <Tab
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
