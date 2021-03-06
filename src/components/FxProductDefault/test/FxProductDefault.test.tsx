/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import FxProductDefault from "../FxProductDefault";

/*
# Test
*/
describe("FxProductDefault", () => {
  test("renders the Button component", () => {
    render(
      <FxProductDefault
        label="Hello world!"
        image="http://localhost:1337/uploads/dustygreen_background_jungle_inner_f2ef41988f.jpg"
      />
    );
  });
});
