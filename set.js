(() => {
  const set1 = new Set([1, 2, 3, 4, 5]);
  console.log(set1.has(1));
  console.log(set1.size);
  console.log(set1.delete(3));
  console.log(set1);
  set1.add(9);
  console.log(set1.keys());
  console.log(set1.values());
})();
