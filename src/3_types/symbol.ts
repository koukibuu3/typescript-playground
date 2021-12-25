/* eslint-disable prefer-const */
console.log("3.2.7 symbol")
{
  let a = Symbol("a")
  let b: symbol = Symbol("b") // eslint-disable-line @typescript-eslint/no-inferrable-types
  var c2 = a === b // eslint-disable-line no-var, vars-on-top
  // let d = a + 'x' // '+' 演算子を 'symbol' 型に適用することはできません。
  console.log(a, b, c2)

  const e = Symbol("e")
  const f: unique symbol = Symbol("f")
  // let g: unique symbol = Symbol('f') // 型が 'unique symbol' 型の変数は、'const' である必要があります。
  let h = e === e // eslint-disable-line no-self-compare
  // let i = e === f // 型 'typeof e' と 'typeof f' には重複がないため、この条件は常に 'false' を返します。
  console.log(e, f, h)
}
