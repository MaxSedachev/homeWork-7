import {largestAndSmallestElement} from './Array2.js';

describe("Find the largest and smallest elements of the original array", ()=>{
    it("return 20 and 2 relative to original array", ()=>{
        console.log = jest.fn();
        largestAndSmallestElement();
        expect(console.log).toHaveBeenCalledWith(20);
        expect(console.log).toHaveBeenCalledWith(2);
    });
});