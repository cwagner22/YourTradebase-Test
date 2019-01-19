import { getDistanceFromLatLonInKm } from "./distance";

it("calculates distances between 2 locations correctly", () => {
  const distance = getDistanceFromLatLonInKm(36.12, -86.67, 33.94, -118.4);
  expect(Math.round(distance)).toBe(2886);
});

it("returns the same result if the locations are inversed", () => {
  const distance1 = getDistanceFromLatLonInKm(
    51.450167,
    -2.594678,
    51.429388,
    -2.024979
  );
  const distance2 = getDistanceFromLatLonInKm(
    51.429388,
    -2.024979,
    51.450167,
    -2.594678
  );

  expect(distance2).toBe(distance1);
});

it("returns 0 for the same location", () => {
  const distance = getDistanceFromLatLonInKm(36.12, -86.67, 36.12, -86.67);
  expect(distance).toBe(0);
});
