/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Calendar from "../Calendar";

/*
# Test
*/
describe("Calendar", () => {
  test("renders the Button component", () => {
    render(
      <Calendar
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
