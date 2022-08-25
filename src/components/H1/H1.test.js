import React from "react";
import { render } from "@testing-library/react";

import H1 from "./H1";

describe("H1", () => {
  test("renders the H1 component", () => {
    render(<H1>H1 Text Goes Here</H1>);
  });
});
