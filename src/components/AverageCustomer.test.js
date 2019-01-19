import React from "react";
import { create } from "react-test-renderer";
import AverageCustomer from "./AverageCustomer";
import people from "./people-test";

it("shows the correct average", () => {
  const component = create(<AverageCustomer customers={people} />);
  // expect(component.toJSON()).toMatchSnapshot();
  const rootInstance = component.root;
  const averageStr = rootInstance.findByType("h4").props.children;
  expect(averageStr.includes("3214.67")).toBe(true);
});
