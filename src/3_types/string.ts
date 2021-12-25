/* eslint-disable prefer-const */
console.log("3.2.6 string")
{
  let a = "hello"
  var b3 = "billy" // eslint-disable-line no-var, vars-on-top
  const c = "!"
  let d = a + " " + b3 + c // eslint-disable-line prefer-template
  let e: string = "zoom" // eslint-disable-line @typescript-eslint/no-inferrable-types
  let f: "john" = "john" // eslint-disable-line @typescript-eslint/prefer-as-const
  // let g: 'john' = 'zoe' // 型 '"zoe"' を型 '"john"' に割り当てることはできません。
  console.log(d, e, f)
}
