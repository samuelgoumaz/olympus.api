/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import InputNumber from "../InputNumber";

/*
# Test
*/
describe("InputNumber", () => {
  test("renders the Button component", () => {
    render(
      <InputNumber
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
