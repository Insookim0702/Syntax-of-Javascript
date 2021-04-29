(() => {
  /*
   * sort()는 문자, 숫자, 객체를 정렬할 수 있습니다.
   * 배열 자체의 순서를 정렬합니다.
   */
  const months = ["March", "may", "june", "desc", "apple"];
  //대문자가 소문자보다 앞에 옴.
  console.log(months.sort());

  //대소문자 구분 없이 ASC\\코드로만 구분하는 방법.
  console.log(
    months
      .map((a) => {
        return a.toLowerCase();
      })
      .sort()
  );

  //문자열 정렬
  const munja = "onetwoThree";
  const munjaArr = munja.split("");
  munjaArr.sort();
  console.log(munjaArr.join(""));

  //문자열 내림차순 정렬하기
  munjaArr.sort((a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
    if (a === b) return 0;
  });
  console.log(munjaArr.join(""));

  //객체의 원소로 정렬하기
  const arr = [
    { name: "a", age: 23 },
    { name: "b", age: 11 },
    { name: "b2", age: 110 },
    { name: "c", age: 32 },
  ];
  // 오름차순
  const asc = arr.sort((a, b) => {
    return a.age - b.age;
  });
  console.log(JSON.stringify(asc));

  //내림차순
  arr.sort((a, b) => {
    return b.age - a.age;
  });
  console.log(JSON.stringify(arr));
})();
