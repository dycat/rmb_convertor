import { expect, test } from "vitest";
import { toFormal } from "./convertor";

// test convert cases
test('Test convert single number', () => {
    expect(toFormal('1')).toBe("壹");
    expect(toFormal('2')).toBe('贰');
})