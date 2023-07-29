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
    expect(toFormal('123')).toBe('壹佰贰拾叁');
    expect(toFormal('120')).toBe("壹佰贰拾");
})

test("Test convert thousand's digit", () => {
    expect(toFormal('1000')).toBe("壹仟");
})

test("Test convert ten thousand's digit", () => {
    expect(toFormal('10000')).toBe("壹万");
})

test("Test convert ten thousand's digit", () => {
    // expect(toFormal('100000')).toBe("拾万");
    expect(toFormal('200000')).toBe("贰拾万");
    expect(toFormal('250000')).toBe("贰拾伍万");
})