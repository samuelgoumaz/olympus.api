/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Room from "../Room";

/*
# Test
*/
describe("Room", () => {
  test("renders the Button component", () => {
    render(
      <Room
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
