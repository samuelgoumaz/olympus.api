/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Radio from "../Radio";

/*
# Test
*/
describe("Radio", () => {
  test("renders the Button component", () => {
    render(
      <Radio
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
