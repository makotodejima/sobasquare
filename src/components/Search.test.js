import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";

function add(num, num2) {
  return num + num2;
}

it("renders without crashing", () => {
  expect(add(2, 5)).toBe(7);
});
