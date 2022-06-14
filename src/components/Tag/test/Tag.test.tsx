/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Tag from "../Tag";

/*
# Test
*/
describe("Tag", () => {
  test("renders the Button component", () => {
    render(
      <Tag
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
