/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import InputDate from "../InputDate";

/*
# Test
*/
describe("InputDate", () => {
  test("renders the Button component", () => {
    render(
      <InputDate
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
