type CartItem = { name: string; price: number };
type orderStatus = 'open' | 'closed';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: orderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  remove(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): orderStatus {
    return this._orderStatus;
  }
  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }
  checkout(): void {
    if (this.isEmpty()) {
      console.log('Checkout');
      return;
    }

    this._orderStatus = 'closed';
    this.senMessage('Seu pedido  foi recebido');
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  senMessage(msg: string): void {
    console.log('Messagem enviada:', msg);
  }
  saveOrder(): void {
    console.log('Salvo com sucesso...');
  }
  clear(): void {
    console.log('Carrinho de compras foi limpo...');
    this._items.length = 0;
  }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'Camisa', price: 49.9 });
shoppingCart.addItem({ name: 'blase', price: 25.9 });
shoppingCart.addItem({ name: 'calça', price: 8.933 });

console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
