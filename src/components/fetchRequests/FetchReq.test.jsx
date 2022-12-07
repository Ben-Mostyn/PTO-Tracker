import React from "react";
import { render, fireEvent } from "@testing-library/react";

import BookTO from "../bookTO/BookTO";
const getFetch = require("./FetchReq");

test("rendering BookedTO", () => {
  render(<BookTO />);
});

test("render BookedTO", () => {
  const { getByRole } = render(<BookTO />);
  const allBtns = getByRole("button");
  fireEvent.click(allBtns);
});
