/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Aside from "../Aside";

/*
# Test
*/
describe("Aside", () => {
  test("renders the Button component", () => {
    render(
      <Aside
        fx_aside={false}
        fx_negative={false}
        fx_top={false}
        fx_pinned={false}
      >
        <h1>hello</h1>
      </Aside>
    );
  });
});
