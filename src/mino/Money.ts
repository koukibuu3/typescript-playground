type Currency = "JPY" | "USD" | "EUR"

class Money {
  public readonly amount: number

  public readonly currency: Currency

  constructor(amount: number, currency: Currency) {
    if (amount < 0) throw new Error("金額は0以上を指定してください")
    if (currency == null) throw new Error("通貨を指定してください")

    this.amount = amount
    this.currency = currency
  }

  public add(other: Money): Money {
    if (this.currency !== other.currency) throw new Error("通貨が違います")

    const added = this.amount + other.amount
    return new Money(added, this.currency)
  }
}

export default Money
