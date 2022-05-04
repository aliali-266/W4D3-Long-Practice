function allTheArgs(func, ...args) {
  let binder = func.bind(null, ...args);
  return binder;
}

// allTheArgs(sum,1,2)
// allTheArgs(sum,3,3)
// allTheArgs(sum,3,4)







/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
