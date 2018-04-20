const data = [
  { branchname: "交管局后勤装备财务处", f_type: "A", key_valuse: 6423.05 },
  { branchname: "交管局后勤装备财务处", f_type: "C", key_valuse: 3803.68 },
  { branchname: "交管局后勤装备财务处", f_type: "O", key_valuse: 945 },
  { branchname: "交管局政治处", f_type: "A", key_valuse: 2070.71 },
  { branchname: "交管局政治处", f_type: "C", key_valuse: 3864.71 },
  { branchname: "交管局政治处", f_type: "O", key_valuse: 1012 },
  { branchname: "交管局秩序管理处", f_type: "A", key_valuse: 4433.05 },
  { branchname: "交管局秩序管理处", f_type: "C", key_valuse: 7 },
  { branchname: "交管局秩序管理处", f_type: "O", key_valuse: 0 }
];

const object = data.reduce((obj, item) => {
  if (obj[item.branchname]) {
    obj[item.branchname] = {
      ...obj[item.branchname],
      [item.f_type]: item.key_valuse
    };
  } else {
    obj[item.branchname] = { [item.f_type]: item.key_valuse };
  }
  return obj;
}, {});

const newArr = [];
for (const key in object) {
  if (object.hasOwnProperty(key)) {
    const element = object[key];
    newArr.push({ [key]: element });
  }
}

console.log(JSON.stringify(newArr));

export default data;

// [{ "A": 6423.05, "C": 3803.68,"O": 945",name": "交管局后勤装备财务处" }]":"交管局秩序管理处"}]
