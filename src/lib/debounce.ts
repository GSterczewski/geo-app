
export default function debouce<F extends (...args: any)=> any >(callback: F, wait = 100 ){
  
  let timeout = 0;
  return (...args: any[]) => {
    const later = () => {
      timeout = 0;
      callback.apply(null, args)
    }
    clearTimeout(timeout);
    timeout = window.setTimeout(later,wait);
  }
}