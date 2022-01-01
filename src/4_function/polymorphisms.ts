{
  // 4.2 ポリモーフィズム
  // type Filter = {
  //   (array: number[], f: (item: number) => boolean): number[]
  //   (array: string[], f: (item: string) => boolean): string[]

  //   (array: object[], f: (item: object) => boolean): object[]
  // }
  type Filter = {
    <T>(array: T[], f: (item: T) => boolean): T[]
  }
  const filter: Filter = (array, f) => array.filter(f)
  filter([1, 2, 3], (_) => _ > 2)
  filter(["a", "b"], (_) => _ !== "b")
  const names = [
    { firstName: "beth" },
    { firstName: "caitlyn" },
    { firstName: "xin" },
  ]
  filter(names, (_) => _.firstName.startsWith("b"))

  // 4.2.1 ジェネリックはいつバインドされるか？
  type Filter1 = {
    <T>(array: T[], f: (item: T) => boolean): T[]
  }
  const filter1: Filter1 = (array, f) => array.filter(f)
  type Filter2<T> = {
    (array: T[], f: (item: T) => boolean): T[]
  }
  const filter2: Filter2<number> = (array, f) => array.filter(f)
  // 4.2.2 ジェネリックはどこで宣言できるか？
  type Filter3 = <T>(array: T[], f: (item: T) => boolean) => T[]
  const filter3: Filter3 = (array, f) => array.filter(f)
  const filter4: <T>(array: T[], f: (item: T) => boolean) => T[] = (array, f) =>
    array.filter(f)

  const map: <T, U>(array: T[], f: (item: T) => U) => U[] = (array, f) => {
    const result = []
    for (let i = 0; i < array.length; i += 1) {
      result[i] = f(array[i])
    }
    return result
  }

  // 4.2.4 ジェネリック型エイリアス
  type MyEvent<T> = {
    target: T
    type: string
  }
  type ButtonEvent = MyEvent<HTMLButtonElement>
  const myEvent: MyEvent<HTMLButtonElement | null> = {
    target: document.querySelector("#myButton"),
    type: "click",
  }
  type TimeEvent<T> = {
    event: MyEvent<T>
    from: Date
    to: Date
  }

  // 4.2.5 制限付きポリモーフィズム
  type TreeNode = {
    value: string
  }
  type LeafNode = TreeNode & {
    isLeaf: true
  }
  type InnerNode = TreeNode & {
    children: [TreeNode] | [TreeNode, TreeNode]
  }
  const mapNode: <T extends TreeNode>(
    node: T,
    f: (value: string) => string
  ) => T = (node, f) => ({
    ...node,
    value: f(node.value),
  })

  type HashSides = { numberOfSides: number }
  type SideHaveLength = { sideLength: number }
  const logPerimeter: <Shape extends HashSides & SideHaveLength>(
    s: Shape
  ) => Shape = (s) => {
    console.log(s.numberOfSides * s.sideLength)
    return s
  }
}
