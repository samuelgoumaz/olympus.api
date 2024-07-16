/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Booking from "../Booking";

/*
# Test
*/
describe("Booking", () => {
  test("renders the Button component", () => {
    render(
      <Booking
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
