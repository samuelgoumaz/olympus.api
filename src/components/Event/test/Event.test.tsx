/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Event from "../Event";

/*
# Test
*/
describe("Event", () => {
  test("renders the Button component", () => {
    render(
      <Event
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});