(() => {
  /**
   * 배열을 순회하면서 각 element의 값을 변경하여 새로운 배열을 만들어 줍니다.
   * map() 함수는 이 callback 함수가 return 하는 값으로 새로운 배열을 만들어서 리턴합니다.
   * 파라미터
   * callback(currentValue, index, array)
   * 새로운 배열을 생성하는 함수이고, 다음 3개의 파라미터를 받습니다.
   * currentValue : 현재 처리중인 배열의 element
   * index(optional) : 현재 처리중인 배열의 index
   * array(optional) : 현재 처리중인 배열
   */
  const arr = [1, 2, 3, 4];
  const doubleArr = arr.map((t) => t * 2);
  console.log(doubleArr);

  const munjaArr = ["REMK", "REQWE", "QCSA"];
  const toLowerArr = munjaArr.map((t) => t.toLowerCase());
  console.log(toLowerArr);

  const m = ["1", "2", "3"];
  const n = m.map(Number);
  console.log(n);
})();
