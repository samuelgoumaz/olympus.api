/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Film from "../Film";

/*
# Test
*/
describe("Film", () => {
  test("renders the Button component", () => {
    render(
      <Film
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
