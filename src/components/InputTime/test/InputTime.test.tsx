/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import InputTime from "../InputTime";

/*
# Test
*/
describe("InputTime", () => {
  test("renders the Button component", () => {
    render(
      <InputTime
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
