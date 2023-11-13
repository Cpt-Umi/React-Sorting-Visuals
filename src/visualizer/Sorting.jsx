import React from "react";
import { useState } from "react";

const Sorting = () => {
  const [mainArr, setMainArr] = useState([]);
  const [active, setActive] = useState(false);
  const ARRAY_LENGTH = 120;

  const generateArr = () => {
    let auxArr = [];
    for (let i = 0; i < ARRAY_LENGTH; i++) {
      auxArr.push(randomValues(5, 500));
    }
    setMainArr(auxArr);
    for (let i = 0; i < mainArr.length; i++) {
      let bar = document.getElementById(i).style;
      bar.backgroundColor = "cyan";
    }
  };

  function randomValues(min, max) {
    var randomValues = Math.floor(Math.random() * (max - min + 1) + min);
    return randomValues;
  }

  const sleep = () => {
    return new Promise((resolve) => setTimeout(resolve, 5));
  };

  const bubbleSort = async () => {
    let currentArr = mainArr;
    let flag = false;
    setActive(true);

    while (!flag) {
      flag = true;
      for (let i = 0; i < currentArr.length - 1; i++) {
        if (currentArr[i] > currentArr[i + 1]) {
          let temp = currentArr[i];
          let temp1 = currentArr[i + 1];

          let bar = document.getElementById(i).style;
          let bar1 = document.getElementById(i + 1).style;
          bar.backgroundColor = "#DC143C";
          bar1.backgroundColor = "#6A5ACD";

          currentArr[i] = temp1;
          currentArr[i + 1] = temp;
          setMainArr([...mainArr, currentArr]);

          await sleep();

          bar.backgroundColor = "#00B6D4";
          bar1.backgroundColor = "#00B6D4";

          flag = false;
        }
      }
    }
    setActive(false);
  };

  return (
    <div className="">
      <header className="flex space-x-5 justify-center text-2xl pt-1">
        <button
          className="hover:bg-slate-300 p-1 rounded-md"
          onClick={generateArr}
          disabled={active}
        >
          Generate Array
        </button>
        <button
          className="hover:bg-slate-300 p-1 rounded-md"
          onClick={() => {
            window.location.reload(false);
          }}
        >
          Refresh
        </button>
        <button
          className="hover:bg-slate-300 p-1 rounded-md"
          onClick={bubbleSort}
        >
          Bubble Sort
        </button>
      </header>
      <div className="mt-5 bg-slate-500" style={{ height: "500px" }}>
        {mainArr &&
          mainArr.map((val, index) => {
            return (
              <>
                <div
                  id={index}
                  className="w-2 bg-cyan-500 ml-1 inline-block rounded-sm "
                  style={{ height: val }}
                ></div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Sorting;
