/*
# Imports
*/
import React from "react";
import { render } from "@testing-library/react";
import Playlist from "../Playlist";

/*
# Test
*/
describe("Playlist", () => {
  test("renders the Button component", () => {
    render(
      <Playlist
        label="Hello world!"
        positive="http://localhost:1337/uploads/branding_85acfc9546.svg"
      />
    );
  });
});
