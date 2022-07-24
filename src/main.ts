export enum Coin {
  ONE_CENT = 1,
  FIVE_CENTS = 5,
  TEN_CENTS = 10
}

export enum Product {
  BOOK = 5,
  MOVIE = 10
}

export interface VendingMachine {
  insertCoin(coin:Coin) : void;
  buyProduct(product:Product) : Boolean;
  cancelTransaction() : Boolean;
}

export class BasicVendingMachine implements VendingMachine {

  coinCounter:number = 0

  insertCoin(coin: Coin): void {
    this.coinCounter=coin
  }

  buyProduct(product: Product): Boolean {
    return this.coinCounter > product;
  }

  cancelTransaction(): Boolean {
    return this.coinCounter > 0;
  }

}

const main = async (): Promise<boolean> => {

  const vending:VendingMachine = new BasicVendingMachine();
  vending.insertCoin(Coin.ONE_CENT);
  let output = vending.buyProduct(Product.MOVIE);
  console.log(`purchase state - ${output}`)

  return true
}

main()
