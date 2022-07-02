import Weapon from "./Weapon"
import AttackPower from "./AttackPower"

const main = () => {
  const attackPowerA = new AttackPower(10)
  const attackPowerB = new AttackPower(10)

  const weaponA = new Weapon(attackPowerA)
  const weaponB = new Weapon(attackPowerB)

  const reinForcedWeaponB = weaponA.reinForce(new AttackPower(5))

  console.log("WeaponA", weaponA.attackPower.value)
  console.log("WeaponB", weaponB.attackPower.value)
  console.log("Reinforced weaponB", reinForcedWeaponB.attackPower.value)
}

main()
