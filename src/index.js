import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const data = {
  status: "SUCCESS",
  cause: null,
  data: {
    "8月": [
      {
        f_type: "A",
        key_valuse: 12926.81
      },
      {
        f_type: "B",
        key_valuse: 13758.78
      },
      {
        f_type: "C",
        key_valuse: 7675.39
      },
      {
        f_type: "O",
        key_valuse: 1971
      }
    ],
    "7月": [
      {
        f_type: "A",
        key_valuse: 12926.81
      },
      {
        f_type: "B",
        key_valuse: 13758.78
      },
      {
        f_type: "C",
        key_valuse: 7675.39
      },
      {
        f_type: "O",
        key_valuse: 1971
      }
    ],
    "6月": [
      {
        f_type: "A",
        key_valuse: 12926.81
      },
      {
        f_type: "B",
        key_valuse: 13758.78
      },
      {
        f_type: "C",
        key_valuse: 7675.39
      },
      {
        f_type: "O",
        key_valuse: 1971
      }
    ],
    "5月": [
      {
        f_type: "A",
        key_valuse: 12926.81
      },
      {
        f_type: "B",
        key_valuse: 13758.78
      },
      {
        f_type: "C",
        key_valuse: 7675.39
      },
      {
        f_type: "O",
        key_valuse: 1971
      }
    ],
    "4月": [
      {
        f_type: "A",
        key_valuse: 12926.81
      },
      {
        f_type: "B",
        key_valuse: 13758.78
      },
      {
        f_type: "C",
        key_valuse: 7675.39
      },
      {
        f_type: "O",
        key_valuse: 1971
      }
    ],
    "3月": [
      {
        f_type: "A",
        key_valuse: 12926.81
      },
      {
        f_type: "B",
        key_valuse: 13758.78
      },
      {
        f_type: "C",
        key_valuse: 7675.39
      },
      {
        f_type: "O",
        key_valuse: 1971
      }
    ],
    "2月": [
      {
        f_type: "A",
        key_valuse: 12926.81
      },
      {
        f_type: "B",
        key_valuse: 13758.78
      },
      {
        f_type: "C",
        key_valuse: 7675.39
      },
      {
        f_type: "O",
        key_valuse: 1971
      }
    ],
    "12月": [
      {
        f_type: "A",
        key_valuse: 12926.81
      },
      {
        f_type: "B",
        key_valuse: 13758.78
      },
      {
        f_type: "C",
        key_valuse: 7675.39
      },
      {
        f_type: "O",
        key_valuse: 1971
      }
    ],
    "1月": [
      {
        f_type: "A",
        key_valuse: 12926.81
      },
      {
        f_type: "B",
        key_valuse: 13758.78
      },
      {
        f_type: "C",
        key_valuse: 7675.39
      },
      {
        f_type: "O",
        key_valuse: 1971
      }
    ],
    "10月": [
      {
        f_type: "A",
        key_valuse: 12926.81
      },
      {
        f_type: "B",
        key_valuse: 13758.78
      },
      {
        f_type: "C",
        key_valuse: 7675.39
      },
      {
        f_type: "O",
        key_valuse: 1971
      }
    ],
    "11月": [
      {
        f_type: "A",
        key_valuse: 12926.81
      },
      {
        f_type: "B",
        key_valuse: 13758.78
      },
      {
        f_type: "C",
        key_valuse: 7675.39
      },
      {
        f_type: "O",
        key_valuse: 1971
      }
    ],
    "9月": [
      {
        f_type: "A",
        key_valuse: 12926.81
      }
    ]
  }
};

const arr = ["1", "1", "1", "2", "2", "2", "3", "3", "3"];
const aa = arr.reduce((newArr, item) => {
  if (newArr.indexOf(item) === -1) {
    newArr.push(item);
  }
  return newArr;
}, []);
console.log(aa);
const object = data.data;

const transformData = () => {
  let newArr = [];
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const a2 = object[key].map(item => {
        item[key] = item.key_valuse;
        delete item.key_valuse;
        return item;
      });
      newArr = newArr.concat(a2);
    }
  }

  const o4 = newArr.reduce((o3, item) => {
    if (o3[item.f_type]) {
      o3[item.f_type] = { ...o3[item.f_type], ...item };
    } else {
      o3[item.f_type] = item;
    }
    return o3;
  }, {});
  return Object.values(o4);
};

console.log(transformData(data.data));
const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
  </div>
);

render(<App />, document.getElementById("root"));
