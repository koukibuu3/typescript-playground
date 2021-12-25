/* eslint-disable prefer-const */
console.log("3.2.10 配列")
{
  let a = [1, 2, 3]
  var b = ["a", "b"] // eslint-disable-line no-var, vars-on-top
  let c: string[] = ["a"]
  let d = [1, "a"]
  const e = [2, "b"]

  let f = ["red"]
  f.push("blue")
  // f.push(true) // 型 'boolean' の引数を型 'string' のパラメーターに割り当てることはできません。

  let g = []
  g.push(1)
  g.push("red")

  let h: number[] = []
  h.push(1)
  // h.push("red") // 型 'string' の引数を型 'number' のパラメーターに割り当てることはできません
  console.log(a, b, c, d, e, f, g, h)
}

{
  let d = [1, "a"]

  console.log(
    d.map((_) => {
      if (typeof _ === "number") {
        return _ * 3
      }
      return _.toUpperCase()
    })
  )
}
