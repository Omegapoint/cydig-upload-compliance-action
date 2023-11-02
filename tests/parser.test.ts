import { expect } from "chai";
import {parseToNumberOrUndefined} from '../src/lib/parser';

describe('Parser Test', () => {
    it('Should return number', () => {
        const result: number | undefined = parseToNumberOrUndefined('1');
        expect(result).to.be.equals(1)
    })

    it('Should return number given string 0', () => {
        const result: number | undefined = parseToNumberOrUndefined('0');
        expect(result).to.be.equals(0)
    })

    const values: string[] = [' ', 'hej', null, undefined]
    values.forEach((value: string) => {
        it('Should return undefined', () => {
            const result: number | undefined = parseToNumberOrUndefined(value);
            expect(result).to.be.undefined;
        })
    })
})