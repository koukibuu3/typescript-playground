class AttackPower {
  private readonly MIN = 0

  public readonly value: number

  constructor(value: number) {
    if (value < this.MIN) throw new Error(`${this.MIN} 以上を指定してください`)

    this.value = value
  }

  /** 攻撃力を強化する */
  public reinForce(increment: AttackPower): AttackPower {
    return new AttackPower(this.value + increment.value)
  }

  /** 無力化する */
  public disable(): AttackPower {
    return new AttackPower(this.MIN)
  }
}

export default AttackPower
