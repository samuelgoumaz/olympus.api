/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Introduction from "../Introduction";

/*
# Test
*/
describe("Introduction", () => {
  test("renders the Button component", () => {
    render(
      <Introduction
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
