/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Feedback from "../Feedback";

/*
# Test
*/
describe("Feedback", () => {
  test("renders the Feedback component", () => {
    render(
      <Feedback
        position={2}
        debug={false}
        author={`Samuel`}
        body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
        fx={false}
        children={false}
        scene={false}
      />
    );
  });
});
