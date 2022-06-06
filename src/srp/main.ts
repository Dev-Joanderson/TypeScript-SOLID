import { Order } from './entities/order';
import { Product } from './entities/products';
import { ShoppingCart } from './entities/shopping-cart';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();

const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camisa', 49.99));
shoppingCart.addItem(new Product('Blaser', 30.5));
shoppingCart.addItem(new Product('Calça', 119.9));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
order.checkout();
console.log(order.orderStatus);
