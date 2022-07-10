/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import FxProductImage from "../FxProductImage";

/*
# Test
*/
describe("FxProductImage", () => {
  test("renders the Button component", () => {
    render(
      <FxProductImage
        label="Hello world!"
        image="http://localhost:1337/uploads/dustygreen_background_jungle_inner_f2ef41988f.jpg"
      />
    );
  });
});
