/* eslint-disable prefer-const */
console.log("3.2.3 boolean")
{
  let a = true
  var b1 = false // eslint-disable-line no-var, vars-on-top
  const c = true
  let d = true
  let e: true = true // eslint-disable-line @typescript-eslint/prefer-as-const
  // let f: true = false // 型 'false' を型 'true' に割り当てることはできません。
  console.log(a, b1, c, d, e)
}
