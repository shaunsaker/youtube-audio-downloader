export default function diffArrays(arrayA, arrayB) {
  return arrayA.filter((item) => arrayB.indexOf(item) === -1);
}
