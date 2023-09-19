/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Show from "../Show";

/*
# Test
*/
describe("Show", () => {
  test("renders the Button component", () => {
    render(
      <Show
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
