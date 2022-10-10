/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Shop from "../Shop";

/*
# Test
*/
describe("Shop", () => {
  test("renders the Button component", () => {
    render(
      <div
        fx_aside={false}
        fx_negative={false}
        fx_top={false}
        fx_pinned={false}
      >
        <h1>hello</h1>
      </div>
    );
  });
});
