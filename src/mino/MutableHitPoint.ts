/** ヒットポイント（HP）を表現するクラス（ミューテーター仕様） */
class MutableHitPoint {
  /** 最小ヒットポイント */
  private static readonly MIN = 0

  /** 最大ヒットポイント */
  private static readonly MAX = 100

  /** 現在ヒットポイント */
  public value: number

  constructor(value: number) {
    if (value < MutableHitPoint.MIN)
      throw new Error(`${MutableHitPoint.MIN} 以上を指定してください`)
    if (value > MutableHitPoint.MAX)
      throw new Error(`${MutableHitPoint.MAX} 以下を指定してください`)

    this.value = value
  }

  /** ダメージを受ける */
  public damage(damageAmount: number): void {
    this.value = Math.max(MutableHitPoint.MIN, this.value - damageAmount)
  }

  /** 回復する */
  public recover(recoverAmount: number): void {
    this.value = Math.min(MutableHitPoint.MAX, this.value + recoverAmount)
  }
}

export default MutableHitPoint
