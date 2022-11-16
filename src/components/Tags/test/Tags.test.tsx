/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Tags from "../Tags";

/*
# Test
*/
describe("Tags", () => {
  test("renders the Button component", () => {
    render(
      <Tags
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
