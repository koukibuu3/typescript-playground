/* eslint-disable prefer-const */
console.log("3.2.4 number")
{
  let a = 1234
  var b2 = Infinity * 0.1 // eslint-disable-line no-var, vars-on-top
  const c = a < b2
  let d = a < b2
  let e: number = 100 // eslint-disable-line @typescript-eslint/no-inferrable-types
  let f: 26.218 = 26.218 // eslint-disable-line @typescript-eslint/prefer-as-const
  // let g: 26.218 = 10 // 型 '10' を型 '26.218' に割り当てることはできません。
  console.log(1, b2, c, d, e, f)
}
