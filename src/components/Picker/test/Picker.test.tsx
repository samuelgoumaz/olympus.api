/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Picker from "../Picker";

/*
# Test
*/
describe("Picker", () => {
  test("renders the Button component", () => {
    render(
      <Picker
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
