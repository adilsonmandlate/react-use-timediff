import { useTimeDiff } from "./";
import { renderHook } from "@testing-library/react-hooks";

describe("useTimeDiff", () => {
  it("should throw an error when not provided required param", () => {
    const { result } = renderHook(() => useTimeDiff());

    expect(result.current).toMatchObject(new Error("No date provided!"));
  });

  it("should correctly calculate time differences", () => {
    const oldDate = new Date();
    const newDate = new Date().setDate(oldDate.getDate() + 10);

    const { result } = renderHook(() =>
      useTimeDiff(newDate, { startDate: oldDate })
    );
    expect(result.current).toMatchObject({
      days: 10,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it("should return negative numbers to past days", () => {
    const oldDate = new Date(2020, 0, 1);
    const newDate = new Date(2020, 7, 17);

    const { result } = renderHook(() =>
      useTimeDiff(oldDate, { startDate: newDate })
    );
    expect(result.current).toMatchObject({
      days: -229,
      hours: -0,
      minutes: -0,
      seconds: -0,
    });
  });
});
