import { pipe } from "lib/fp";


describe("pipe function", ()=>{
  it("should return correct number", ()=>{
    const add = a => b => a + b;
    const add5 = add(5);
    const add3 = add(3);
    const multiply = a => b => a * b;
    const multiplyBy10 = multiply(10);

    expect(pipe(add5,add3,multiplyBy10)(1)).toEqual(90);

  })
})