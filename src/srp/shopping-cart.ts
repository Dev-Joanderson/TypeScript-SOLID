type CartItem = { name: string; price: number };

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  remove(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'Camisa', price: 49.9 });
shoppingCart.addItem({ name: 'blase', price: 25.9 });
shoppingCart.addItem({ name: 'calça', price: 8.9 });

console.log(shoppingCart.items);
