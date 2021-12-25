/* eslint-disable prefer-const */
console.log("3.2.5 bigint") // ES2020以上
{
  let a = 1234n
  const b = 5678n
  var c1 = a + b // eslint-disable-line no-var, vars-on-top
  let d = a < 1235
  // let e = 88.5n // bigint リテラルは整数である必要があります。
  let f: bigint = 100n // eslint-disable-line @typescript-eslint/no-inferrable-types
  // let h: bigint = 100 // 型 'number' を型 'bigint' に割り当てることはできません。
  console.log(a, b, c1, d, f)
}
