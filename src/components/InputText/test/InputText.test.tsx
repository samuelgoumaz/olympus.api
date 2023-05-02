/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import InputText from "../InputText";

/*
# Test
*/
describe("InputText", () => {
  test("renders the Button component", () => {
    render(
      <InputText
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
