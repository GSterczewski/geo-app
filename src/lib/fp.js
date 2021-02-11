export const pipe = (...fns) => arg => fns.reduce((result, fn) => fn(result), arg);
