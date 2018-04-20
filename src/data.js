const data = ["1", "1", "1", "2", "2", "2", "3", "3", "3"];
//去重函数
export const delRepeat = arr => {
  return arr.reduce((_arr, item) => {
    if (_arr.indexOf(item) === -1) {
      _arr.push(item);
    }
    return _arr;
  }, []);
};
