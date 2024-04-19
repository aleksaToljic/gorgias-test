import { mergeTwoArraysByKeyValue } from "../index";

describe("mergeTwoArraysByKeyValue", () => {
  it("should return merge arrays", () => {
    //arrange
    const firstArray = [{ someId: 1, someValue: "value" }];
    const secondArray = [
      { otherId: 1, otherValue: "value" },
      { otherId: 2, otherValue: 2 },
    ];
    const expectedMap = new Map([
      [1, { someId: 1, someValue: "value", otherId: 1, otherValue: "value" }],
      [2, { otherId: 2, otherValue: 2 }],
    ]);

    //act
    const mergedArrays = mergeTwoArraysByKeyValue(
      firstArray,
      secondArray,
      "someId",
      "otherId",
    );

    //assert
    expect(mergedArrays).toEqual(expectedMap);
  });
});
