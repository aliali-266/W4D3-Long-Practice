



function changeContext(func, obj) {
//  return func.call(obj)

// return func.bind(obj)()

let newContext = func.bind(obj)
return newContext()



}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
