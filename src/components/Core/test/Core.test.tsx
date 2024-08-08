/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Core from "../Core";

/*
# Test
*/
describe("Core", () => {
  test("renders the Button component", () => {
    render(
      <Core
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
