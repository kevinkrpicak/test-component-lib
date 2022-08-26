import React from "react";
import { render } from "@testing-library/react";

import H1 from "./Heading";

describe("Heading", () => {
  test("renders the Heading component", () => {
    render(<Heading>Heading Text Goes Here</Heading>);
  });
});
