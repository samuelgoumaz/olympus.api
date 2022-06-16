/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Title from "../Title";

/*
# Test
*/
describe("Title", () => {
  test("renders the Button component", () => {
    render(
      <Title
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
