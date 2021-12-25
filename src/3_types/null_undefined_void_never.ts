console.log("3.2.12 null, undefined, void, never")

{
  // number | null を返す
  const a = (x: number) => {
    if (x < 10) {
      return x
    }
    return null
  }

  // void を返す
  const b = () => undefined

  const c = () => {
    const f = 2 + 2
    const g = f * f
  }

  // never を返す
  const d = () => {
    throw TypeError("I always error")
  }

  // never を返す
  const e = () => {
    while (true) {
      const h = 1
    }
  }
}
