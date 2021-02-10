interface Cachable{
  [key:string]:any;
}

export default class ResponseCache<T extends Cachable> {
  
  private key:string;
  private _cache : {
    [key: string]: T
  };
  constructor(key:string){
    this.key = key;
    this._cache = {};
  };

  count(){
    return Object.keys(this._cache).length;
  };

  has(key:string){
    return key in this._cache;
  };

  set(value:T){
    if(!this.has(value[this.key])){
      if(!value[this.key]){
        throw new Error(`Specified key : ${this.key} doesn't exists on ${value}`)
      }    
      this._cache[value[this.key]] = value;
    }
  }
  get(key:string){
    return this._cache[key];
  }
  remove(key:string){
    const updatedCache: Cachable = Object.keys(this._cache).reduce((updated:Cachable,cachedKey) => {
      if(cachedKey !== key){
        updated[key] = this._cache[key];
      }
      return updated;
    },{});

    this._cache = updatedCache;
  }
  clear(){
    this._cache = {};
  }
}