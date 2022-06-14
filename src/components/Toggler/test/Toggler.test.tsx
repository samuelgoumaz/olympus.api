/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Toggler from "../Toggler";

/*
# Test
*/
describe("Toggler", () => {
  test("renders the Button component", () => {
    render(
      <Toggler
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
