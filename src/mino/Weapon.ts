import AttackPower from "./AttackPower"

class Weapon {
  public readonly attackPower: AttackPower

  constructor(attackPower: AttackPower) {
    this.attackPower = attackPower
  }

  public reinForce(increment: AttackPower): Weapon {
    return new Weapon(this.attackPower.reinForce(increment))
  }
}

export default Weapon
