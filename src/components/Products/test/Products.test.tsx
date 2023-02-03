/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Text from "../Text";

/*
# Test
*/
describe("Text", () => {
  test("renders the Button component", () => {
    render(
      <Text
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
