import { isAllEqual } from '../../src/helpers/utils';

describe('test all array elements are eqal', () => {
    it('Should return false', () => {
        const inputArray = ['X', 'O', 'X'];
        expect(isAllEqual(inputArray)).toBe(false);
    });
    it('Should return true', () => {
        const inputArray = ['X', 'X', 'X'];
        expect(isAllEqual(inputArray)).toBe(true);
    });
});
