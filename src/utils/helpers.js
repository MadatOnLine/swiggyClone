export const getCartItemCount = (items = []) => {
  //   debugger;
  //   let result = 0;
  //   if (items && items.length > 1) {
  //     grouped = [
  //       ...items
  //         .reduce((mp, o) => {
  //           if (!mp.has(o._id)) mp.set(o._id, Object.assign({ extra: 0 }, o));
  //           mp.get(o._id).extra++;
  //           return mp;
  //         }, new Map())
  //         .values()
  //     ];

  //     console.log("grouped", grouped);
  //     return items.length;
  //   } else {
  //     result = items.length;
  //   }

  result = [];

  items.forEach(function(a) {
    if (!this[a.id]) {
      this[a.id] = { id: a.id, contributions: 0 };
      result.push(this[a.id]);
    }
    this[a.id].contributions += a.contributions || 0;
  }, Object.create(null));

  console.log(result);

  return result;
};
