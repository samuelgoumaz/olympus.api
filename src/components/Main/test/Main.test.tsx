/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Main from "../Main";

/*
# Test
*/
describe("Main", () => {
  test("renders the Button component", () => {
    render(
      <Main
        fx_aside={false}
        fx_negative={false}
        fx_top={false}
        fx_pinned={false}
      >
        <h1>hello</h1>
      </Main>
    );
  });
});
