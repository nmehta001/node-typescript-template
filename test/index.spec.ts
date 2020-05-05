import { add } from "../src";

describe("add", () => {
    test("Test that two numbers added together give the right result", () => {
        expect(add(1, 2)).toEqual(3);
    });
});
