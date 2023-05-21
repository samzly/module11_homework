import { getMonth } from "./index.js";

describe('test for getMonth function', () => {
    it('should operate correctly with numbers from 1 to 12', () => {
        expect(getMonth(1)).toBe('январь');
        expect(getMonth(2)).toBe('февраль');
        expect(getMonth(3)).toBe('март');
        expect(getMonth(4)).toBe('апрель');
        expect(getMonth(5)).toBe('май');
        expect(getMonth(6)).toBe('июнь');
        expect(getMonth(7)).toBe('июль');
        expect(getMonth(8)).toBe('август');
        expect(getMonth(9)).toBe('сентябрь');
        expect(getMonth(10)).toBe('октябрь');
        expect(getMonth(11)).toBe('ноябрь');
        expect(getMonth(12)).toBe('декабрь');
    });
    it('should operate correctly with numbers not from (1, 12)', function () {
        expect(getMonth(-1)).toBe('введены некорректные данные');
        expect(getMonth(0)).toBe('введены некорректные данные');
        expect(getMonth(35565)).toBe('введены некорректные данные');
    });
    it('should operate correctly with float numbers', function () {
        expect(getMonth(-1.25)).toBe('введены некорректные данные');
        expect(getMonth(Math.E)).toBe('введены некорректные данные');
    });
    it('should operate correctly with types of data differ from number', function () {
        expect(getMonth('hello world')).toBe('введены некорректные данные');
        expect(getMonth([1])).toBe('введены некорректные данные');
        expect(getMonth('2')).toBe('введены некорректные данные');
    });
    it('should operate correctly with specials types of numbers', function () {
        expect(getMonth(Infinity)).toBe('введены некорректные данные');
        expect(getMonth(NaN)).toBe('введены некорректные данные');
    });
})