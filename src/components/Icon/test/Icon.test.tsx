/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Icon from "../Icon";

/*
# Test
*/
describe("Icon", () => {
  test("renders the Button component", () => {
    render(
      <Icon
        label="Hello world!"
        name="visa"
      />
    );
  });
});
