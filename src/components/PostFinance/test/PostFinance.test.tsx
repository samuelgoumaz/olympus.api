/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import PostFinance from "../PostFinance";

/*
# Test
*/
describe("PostFinance", () => {
  test("renders the Button component", () => {
    render(
      <PostFinance
        title="Title"
        subtitle="subtitle"
      />
    );
  });
});
