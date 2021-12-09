import {twiceValue} from './Array1.js';

describe("new array which each element twice as large element of the original array", ()=>{
    it("return new array[4,8,12,16,20,24,28,32,36,40] with doubled values relative to original array", ()=>{
        console.log = jest.fn();
        twiceValue();
        expect(console.log).toHaveBeenCalledWith([4,8,12,16,20,24,28,32,36,40]);
    });
});