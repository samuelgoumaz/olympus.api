/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import InputSelect from "../InputSelect";

/*
# Test
*/
describe("InputSelect", () => {
  test("renders the Button component", () => {
    render(
      <InputSelect
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
