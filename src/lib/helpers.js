
export const paginateCollection =  pageSize =>  currentPage => response => response.slice( (currentPage * pageSize) - pageSize , currentPage * pageSize );

export const sortByProperty = property => response => [...response].sort((a,b) => a[property] && b[property] ? a[property] > b[property] ? -1 : 0 : [] );

export const extractFields = (...fields) => item => fields.reduce((result,field) => item[field] ? Object.assign(result, { [field] : item[field] }) :  Object.assign(result, { [field] : null }),{} );