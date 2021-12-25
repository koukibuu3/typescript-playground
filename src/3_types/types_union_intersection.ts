/* eslint-disable prefer-const */
console.log("3.2.9 型エイリアス。合併、交差")
{
  type Age = number

  type Person = {
    name: string
    age: Age
  }

  let age: Age = 56

  let driver: Person = {
    name: "James May",
    age,
  }

  age = 56

  driver = {
    name: "James May",
    age,
  }
  console.log(driver, driver.name, driver.age)

  type Color = "red"
  // type Color = "blue" // 識別子 'Color' が重複しています。

  let x = Math.random() < 0.5

  if (x) {
    type Color = "blue" // eslint-disable-line no-shadow
    let b: Color = "blue"
  } else {
    let c: Color = "red"
  }
}

{
  type Cat = { name: string; purrs: boolean }
  type Dog = { name: string; barks: boolean; wags: boolean }
  type CatOrDogOrBoth = Cat | Dog
  type CatAndDog = Cat & Dog

  // Cat
  let a: CatOrDogOrBoth = {
    name: "Bonkers",
    purrs: true,
  }
  console.log(a, a.name, a.purrs)

  // Dog
  a = {
    name: "Domino",
    barks: true,
    wags: true,
  }
  console.log(a, a.name, a.barks, a.wags)

  // 両方
  a = {
    name: "Donkers",
    barks: true,
    purrs: true,
    wags: true,
  }
  console.log(a, a.name) // CatOrDogOrBoth型は purrs, barks, wagsを持っているか分からないので呼び出せない

  let b: CatAndDog = {
    name: "Domino",
    barks: true,
    purrs: true,
    wags: true,
  }
  console.log(b, b.name, b.barks, b.purrs, b.wags)
}

{
  const trueOrNull = (isTrue: boolean) => {
    if (isTrue) {
      return "true"
    }
    return null
  }

  type Returns = string | null

  const stringOrNumber = (a: string, b: number) => a || b
}
