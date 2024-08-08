/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import LoadingScreen from "../LoadingScreen";

/*
# Test
*/
describe("LoadingScreen", () => {
  test("renders the Button component", () => {
    render(
      <LoadingScreen
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
