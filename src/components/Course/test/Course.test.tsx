/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Course from "../Course";

/*
# Test
*/
describe("Course", () => {
  test("renders the Button component", () => {
    render(
      <Course
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
