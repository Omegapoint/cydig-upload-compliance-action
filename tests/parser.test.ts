import { expect } from 'chai';
import { parseToNumberOrUndefined } from '../src/lib/parser.js';

describe('Parser Test', () => {
    it('Shoould return number', () => {
        const result: number | undefined = parseToNumberOrUndefined('1');
        expect(result).to.be.equals(1);
    });

    const values: string[] = [' ', 'hej', null, undefined];
    values.forEach((value: string) => {
        it('Shoould return undefined', () => {
            const result: number | undefined = parseToNumberOrUndefined(value);
            expect(result).to.be.undefined;
        });
    });
});
