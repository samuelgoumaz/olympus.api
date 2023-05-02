/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Partners from "../Partners";

/*
# Test
*/
describe("Partners", () => {
  test("renders the Button component", () => {
    render(
      <Partners
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_doctype_backend_monogram_positive_06cb043b27.svg?updated_at=2023-03-23T13:08:33.417Z"
      />
    );
  });
});
