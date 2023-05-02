/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Partner from "../Partner";

/*
# Test
*/
describe("Partner", () => {
  test("renders the Button component", () => {
    render(
      <Partner
        title="Gelato Kush"
        image="http://localhost:1337/uploads/branding_doctype_backend_monogram_positive_06cb043b27.svg?updated_at=2023-03-23T13:08:33.417Z"
      />
    );
  });
});
