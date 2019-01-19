import React from "react";
import { create } from "react-test-renderer";
import CustomersList from "./CustomersList";
import people from "./people-test";

it("renders the filtered customers correctly", () => {
  const component = create(<CustomersList customers={people} />);
  const rootInstance = component.root;
  const pre = rootInstance.findByType("pre");
  const customers = JSON.parse(pre.props.children);

  expect(Array.isArray(customers)).toBe(true);
  expect(customers.length).toBe(2);

  expect(customers[0]).toEqual({
    id: "5a00487905c99b6667e5e1ea",
    value: "3749.61",
    fullName: "Riddle Nixon",
    email: "riddle.nixon@isodrive.me"
  });
});
