// プレイヤーの攻撃力を合算する
const sumUpPlayerAttackPower = (
  playerArmPower: number,
  playerWeaponPower: number
): number => playerArmPower + playerWeaponPower

// 敵の防御力を合算する
const sumUpEnemyDefence = (
  enemyBodyDefence: number,
  enemyArmorDefence: number
): number => enemyBodyDefence + enemyArmorDefence

// ダメージ量を評価する
const estimateDamage = (
  totalPlayerAttackPower: number,
  totalEnemyDefence: number
): number => {
  const damageAmount = totalPlayerAttackPower - totalEnemyDefence / 2
  return damageAmount < 0 ? 0 : damageAmount
}

const playerArmPower = 5
const playerWeaponPower = 3
const enemyBodyDefence = 10
const enemyArmorDefence = 5

const totalPlayerAttackPower = sumUpPlayerAttackPower(
  playerArmPower,
  playerWeaponPower
)

const totalEnemyDefence = sumUpEnemyDefence(enemyBodyDefence, enemyArmorDefence)

const totalDamage = estimateDamage(totalPlayerAttackPower, totalEnemyDefence)

console.log("totalDamage", totalDamage)
