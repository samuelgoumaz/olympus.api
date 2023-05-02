/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import InputFile from "../InputFile";

/*
# Test
*/
describe("InputFile", () => {
  test("renders the Button component", () => {
    render(
      <InputFile
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
