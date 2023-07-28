import { expect, test } from "vitest";
import { toFormal } from "./convertor";

// test convert cases
test('Test convert single number', () => {
    expect(toFormal('1')).toBe("壹");
    expect(toFormal('2')).toBe('贰');
})

test('Test convert double number', () => {
    expect(toFormal('12')).toBe('壹拾贰');
    expect(toFormal("23")).toBe("贰拾叁");
})

test('Test convert hunderd number', () => {
    
})