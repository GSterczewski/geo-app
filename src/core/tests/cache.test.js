import ResponseCache from "core/cache";


describe("ResponseCache class", ()=>{
  const testItem1 = {
    id:"item-1",
    name:"some item 1"
  };
  const testItem2 = {
    id:"item-2",
    name:"some item 2"
  };
 
  describe("set/get/count", ()=>{
    
    const cache = new ResponseCache("id");
    
    it("should cache item by provided key, only when that key is not already set", ()=>{
      const itemWithDuplicatedId = {
        id:"item-1",
        name:"duplicated"
      }
      cache.set(testItem1);
      cache.set(testItem2);
      cache.set(itemWithDuplicatedId);
      expect(cache.count()).toEqual(2); 
      expect(cache.get("item-1").name).toEqual(testItem1.name);
      expect(cache.get("item-2").name).toEqual(testItem2.name);
     
    })
    it("should throw an error when specified cache key doesn't exist on item to save", ()=>{
      
      const testItem1 = {
        _id:"item-1",
        name:"some item 1"
      };
      expect(() => cache.set(testItem1)).toThrow();
    })
  })
  describe("remove", ()=>{
    
    it("should remove item based on provided valid key", ()=>{
      const cache = new ResponseCache("id");
      
      cache.set(testItem1);
      cache.set(testItem2);
      
      expect(cache.count()).toEqual(2);
      
      cache.remove("item-1");
      
      expect(cache.count()).toEqual(1);
      expect(cache.get("item-2")).not.toBeDefined();
      expect(cache.has("item-2")).toEqual(false);

    })  
  })
  describe("clear", () => {
    it("should clear cache", ()=>{
      
      const cache = new ResponseCache("id");
    
      cache.set(testItem1);
      cache.set(testItem2);
      
      expect(cache.count()).toEqual(2);
      
      cache.clear();    
      
      expect(cache.count()).toEqual(0);
    })
  })
})