import { paginateCollection, sortByProperty, extractFields } from "lib/helpers";

const createTestInput = (size) => [...Array(size).keys()].map( (num) => ({
  id: `id-${num+1}`,
  name: `name-${num+1}`,
  population: 1000 * (num+1)

}))

describe("response helper functions", ()=>{
  const testResponse = createTestInput(30);

  describe("paginate", ()=>{
    it("should return first 10 result from array", () => {
      const paginated = paginateCollection(10)(1)(testResponse);
      expect(paginated).toBeInstanceOf(Array);
      expect(paginated).toHaveLength(10);
      expect(paginated[0].id).toEqual("id-1");
      expect(paginated[9].id).toEqual("id-10");
    })
    it("should return result from  11 to 20", () => {
      const paginated = paginateCollection(10)(2)(testResponse);
      expect(paginated).toBeInstanceOf(Array);
      expect(paginated).toHaveLength(10);
      expect(paginated[0].id).toEqual("id-11");
      expect(paginated[9].id).toEqual("id-20");
    })
    it("should return only 5 results when specified page size is > available total", () => {
      const shorterResponse = createTestInput(15);
      const paginated = paginateCollection(10)(2)(shorterResponse);
      expect(paginated).toBeInstanceOf(Array);
      expect(paginated).toHaveLength(5);
      expect(paginated[0].id).toEqual("id-11");
      expect(paginated[4].id).toEqual("id-15");
    })
  })

  describe("sortByProperty", ()=> {
    it("should sort response by population",()=>{
      const sortedByPopulation = sortByProperty("population")(testResponse);
      expect(sortedByPopulation).toBeInstanceOf(Array);
      expect(sortedByPopulation).toHaveLength(30);
      expect(sortedByPopulation[0].population).toEqual(30000);
      expect(sortedByPopulation[29].population).toEqual(1000);

    })
  })

  describe("extractFields", () =>{
    it("should return required object fileds", ()=>{
      const testObject = {
        id:"id-1",
        name: "some name",
        age:34,
        gender: "male"
      }
      expect(extractFields("name","gender")(testObject)).toEqual({name:"some name", gender: "male"});
    })
  })
})