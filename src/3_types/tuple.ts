/* eslint-disable prefer-const */
console.log("3.2.11 タプル")

{
  let a: [number] = [1]
  let b: [string, string, number] = ["malcojm", "gladwel", 1963]

  // b = ['queen', 'elizabeth', 'ii', 1926] // 型 'string' を型 'number' に割り当てることはできません。

  console.log(a, b)

  let trainFares: [number, number?][] = [[3.75], [8.25, 7.7], [10.5]]

  let moreTrainFares: ([number] | [number, number])[] = [
    [3.75],
    [8.25, 7.7],
    [10.5],
  ]

  console.log(trainFares, moreTrainFares)

  let friends: [string, ...string[]] = ["Sara", "Tali", "Chloe", "Claire"]

  let list: [number, boolean, ...string[]] = [1, false, "a", "b", "c"]

  console.log(friends, list)
}

{
  let as: readonly number[] = [1, 2, 3]
  let bs: readonly number[] = as.concat(4)
  let three = bs[2]
  // as[4] = 5 // 型 'readonly number[]' のインデックス シグネチャは、読み取りのみを許可します。
  // as.push(6) // プロパティ 'push' は型 'readonly number[]' に存在しません。

  type A = readonly string[]
  type B = ReadonlyArray<string>
  type C = Readonly<string[]>

  type D = readonly [number, string]
  type E = Readonly<[number, string]>
}
