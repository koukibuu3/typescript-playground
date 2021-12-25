/* eslint-disable prefer-const */
console.log("3.2.2 unknown")
{
  let a: unknown = 30
  let b = a === 123
  // let c = a + 10 // オブジェクト型は 'unknown' です。
  if (typeof a === "number") {
    let d = a + 10
    console.log(d)
  }
  console.log(a, b)
}
