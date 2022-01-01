// 4.1
function add(a: number, b: number) {
  return a + b
}

function greet(name: string) {
  return `hello${name}`
}

const greet2 = function (name: string) {
  return `hello${name}`
}

const greet3 = (name: string) => `hello${name}`

// 4.1.1 オプションパラメーターとデフォルトパラメーター
function log(message: string, userId?: string) {
  const time = new Date().toLocaleDateString()
  console.log(time, message, userId || "Not signed in")
}
log("Page loaded")
log("User signed in", "da763be")

function log2(message: string, userId = "Not signed in") {
  const time = new Date().toLocaleDateString()
  console.log(time, message, userId)
}
log2("User signed out")
log2("User clicked on a button", "da763be")

type Context = {
  appId?: string
  userId?: string
}
function log3(message: string, context: Context = {}) {
  const time = new Date().toLocaleDateString()
  console.log(time, message, context.userId)
}

// 4.1.2 レストパラメーター
function sum(numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0)
}
sum([1, 2, 3])

function sumVariadic(): number {
  // eslint-disable-next-line prefer-rest-params
  return Array.from(arguments).reduce((total, n) => total + n, 0)
}
// sumVariadic(1, 2, 3)

function sumVariadicSafe(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0)
}
sumVariadicSafe(1, 2, 3)

interface Console {
  log(message?: any, ...oprionalParams: any[]): void
}

// 4.1.3 call, apply, bind
function add2(a: number, b: number): number {
  return a + b
}
add2(10, 20)
add2.apply(null, [10, 20])
add.call(null, 10, 20)
add.bind(null, 10, 20)()

// 4.1.4 thisの型付け
const x = {
  a() {
    return this
  },
}
x.a() // a()の本体内ではthisはx
const b4 = x.a
b4() // b4()の本体内ではthisはundefined

// function fancyDate() {
//   return `${this.getMonth() + 1}/${this.getDate()}/${this.getFullYear()}`
// }
// fancyDate.call(new Date)
// fancyDate()

function fancyDate(this: Date) {
  return `${this.getMonth() + 1}/${this.getDate()}/${this.getFullYear()}`
}
fancyDate.call(new Date())
// fancyDate()

// 4.1.5 ジェネレーター
function* createFibonacciGenerator() {
  let a = 0
  let b = 1
  while (true) {
    yield a
    ;[a, b] = [b, a + b]
  }
}
const fibonacciGenerator = createFibonacciGenerator()
fibonacciGenerator.next()
fibonacciGenerator.next()
fibonacciGenerator.next()

function* createNumbers(): Generator<number> {
  let n = 0
  while (1) {
    yield n++ // eslint-disable-line no-plusplus
  }
}
const numbers = createNumbers()
numbers.next()
numbers.next()
numbers.next()

// 4.1.6 イテレーター
const numbers2 = {
  *[Symbol.iterator]() {
    // eslint-disable-next-line no-plusplus
    for (let n = 1; n <= 10; n++) {
      yield n
    }
  },
}
const allNumbers = [...numbers2]
// let [one, two, ...rest] = numbers2

// 4.1.7 呼び出しシグネチャ
type Greet = (name: string) => string
type Log = (message: string, userId?: string) => void
type SumVariadicSafe = (...numbers3: number[]) => number

const log4: Log = (message, userId = "Not signed in") => {
  const time = new Date().toISOString()
  console.log(time, message, userId)
}
const sum3: (n1: number, n2: number) => number = (n1, n2) => n1 + n2

// 4.1.8 文脈的型付け
function times(f: (index: number) => void, n: number) {
  for (let i = 0; i < n; i += 1) {
    f(i)
  }
}
times((n) => console.log(n), 4)

// 4.1.9 オーバーロードされた関数の型
type Log4 = (message: string, userId?: string) => void
type Log5 = {
  (message: string, userId?: string): void
}
type Reservation = null
type Reserve = {
  (from: Date, to: Date, destination: string): Reservation
  (from: Date, destination: string): Reservation
}
const reserve: Reserve = (
  from: Date,
  toOrDestination: Date | string,
  destination?: string
) => {
  if (toOrDestination instanceof Date && destination !== undefined) {
    return null
  }
  if (typeof toOrDestination === "string") {
    return null
  }
  return null
}

function warnUser(warning: string) {
  if (warnUser.wasCalled) {
    return
  }
  warnUser.wasCalled = true
  console.log(warning)
}
warnUser.wasCalled = false

type WarnUser = {
  (warning: string): void
  wasCalled: boolean
}
const assignedWarnUser: WarnUser = warnUser
