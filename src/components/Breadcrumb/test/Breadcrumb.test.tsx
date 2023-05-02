/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Breadcrumb from "../Breadcrumb";

/*
# Test
*/
describe("Breadcrumb", () => {
  test("renders the Button component", () => {
    render(
      <Breadcrumb
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
