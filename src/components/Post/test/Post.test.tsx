/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Post from "../Post";

/*
# Test
*/
describe("Post", () => {
  test("renders the Button component", () => {
    render(
      <Post
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
