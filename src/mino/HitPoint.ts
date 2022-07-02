/** ヒットポイント（HP）を表現するクラス */
class HitPoint {
  /** 最小ヒットポイント */
  private static readonly MIN = 0

  /** 最大ヒットポイント */
  private static readonly MAX = 100

  /** 現在ヒットポイント */
  public readonly value: number

  constructor(value: number) {
    if (value < HitPoint.MIN)
      throw new Error(`${HitPoint.MIN} 以上を指定してください`)
    if (value > HitPoint.MAX)
      throw new Error(`${HitPoint.MAX} 以下を指定してください`)

    this.value = value
  }

  /** ダメージを受ける */
  public damage(damageAmount: number): HitPoint {
    const damaged = this.value - damageAmount
    const corrected = damaged < HitPoint.MIN ? HitPoint.MIN : damaged
    return new HitPoint(corrected)
  }

  /** 回復する */
  public recover(recoverAmount: number): HitPoint {
    const recovered = this.value + recoverAmount
    const corrected = HitPoint.MAX < recovered ? HitPoint.MAX : recovered
    return new HitPoint(corrected)
  }
}

export default HitPoint
