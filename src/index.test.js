import { useTimeDiff } from "./";
import { renderHook } from "@testing-library/react-hooks";

describe("useTimeDiff", () => {
  it("should throw an error when not provided required param", () => {
    const { result } = renderHook(() => useTimeDiff());

    expect(result.current).toMatchObject(new Error("No date provided!"));
  });

  it("should throw an error when the start date is greater than final date", () => {
    const initialDate = new Date(2021, 0, 1);
    const finalDate = new Date(2020, 0, 1);

    const { result } = renderHook(() =>
      useTimeDiff(finalDate, { startDate: initialDate })
    );

    expect(result.current).toMatchObject(
      new Error(
        "Cannot make the calculations. The start date is greater than the final date"
      )
    );
  });

  it("should correctly calculate time differences", () => {
    const initialDate = new Date(2020, 9, 21, 11, 5, 15);
    const finalDate = new Date(2022, 8, 10, 11, 5, 10);

    const { result } = renderHook(() =>
      useTimeDiff(finalDate, { startDate: initialDate })
    );

    expect(result.current).toMatchObject({
      years: 1,
      months: 10,
      days: 19,
      hours: 23,
      minutes: 59,
      seconds: 55,
    });
  });
});
