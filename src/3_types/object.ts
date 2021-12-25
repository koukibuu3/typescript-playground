/* eslint-disable prefer-const */
console.log("3.2.8 object")
{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let a: object = {
    b: "x",
  }
  // a.b // プロパティ 'b' は型 'object' に存在しません。
}

{
  let a = {
    b: "x",
  }
  console.log(a, a.b)

  let b = {
    c: {
      d: "f",
    },
  }
  console.log(b, b.c, b.c.d)
}

{
  let a: { b: number } = {
    b: 12,
  }
  console.log(a, a.b)
}

{
  const a: { b: number } = {
    b: 12,
  }
  console.log(a, a.b)
}

{
  let c: {
    firstName: string
    lastName: string
  } = {
    firstName: "john",
    lastName: "barrowman",
  }
  class Person {
    // eslint-disable-next-line no-useless-constructor
    constructor(public firstName: string, public lastName: string) {}
  }
  c = new Person("matt", "smith")
  console.log(c, c.firstName, c.lastName)
}

{
  let a: { b: number }
  // a = {} // プロパティ 'b' は型 '{}' にありませんが、型 '{ b: number; }' では必須です。
  a = {
    b: 1,
    // c: 2, // 型 '{ b: number; c: number; }' を型 '{ b: number; }' に割り当てることはできません。
    // オブジェクト リテラルは既知のプロパティのみ指定できます。'c' は型 '{ b: number; }' に存在しません。
  }
  console.log(a, a.b)
}

{
  let i: number
  // let j = i * 3 // 変数 'i' は割り当てられる前に使用されています。

  let k
  // let l = k * 3 // オブジェクトは 'undefined' である可能性があります。
}

{
  let a: { b: number; c?: string; [key: number]: boolean }
  a = { b: 1 }
  a = { b: 1, c: undefined }
  a = { b: 1, c: "d" }
  a = { b: 1, 10: true }
  a = { b: 1, 10: true, 20: false }
  // a = { 10: true } // プロパティ 'b' は型 '{ 10: true; }' にありませんが、型 '{ [key: number]: boolean; b: number; c?: string | undefined; }' では必須です。
  // a = { b: 1, 33: "red" } // 型 'string' を型 'boolean' に割り当てることはできません。
  console.log(a, a.b, a.c)
}

{
  let airplaneSeatingAssignments: {
    [seatNumber: string]: string
  } = {
    "34D": "Boris Cherny",
    "34E": "Bill Gates",
  }
  console.log(airplaneSeatingAssignments)
}

{
  let user: {
    readonly firstName: string
  } = {
    firstName: "abby",
  }

  console.log(user.firstName)
  // user.firstName = 'abbey with an e' // 読み取り専用プロパティであるため、'firstName' に代入することはできません。
}

{
  let danger: {} // eslint-disable-line @typescript-eslint/ban-types
  danger = {}
  danger = { x: 1 }
  danger = []
  danger = 2
  console.log(danger)
}
