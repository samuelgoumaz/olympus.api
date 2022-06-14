/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Section from "../Section";

/*
# Test
*/
describe("Section", () => {
  test("renders the Button component", () => {
    render(
      <Section
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
