import { TenPercentDiscount } from './classes/discount';
import { Order } from './classes/order';
import { Product } from './classes/products';
import { ShoppingCart } from './classes/shopping-cart';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { IndividualCustomer } from './classes/custumer';

const tenPercentDiscount = new TenPercentDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer(
  'Luiz',
  'trajano',
  '111.111.111-11',
);
const enterpriseCustomer = new IndividualCustomer(
  'Luiz',
  'trajano',
  '111.111.111-11',
);
const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  individualCustomer,
);

shoppingCart.addItem(new Product('Camisa', 49.99));
shoppingCart.addItem(new Product('Blaser', 30.5));
shoppingCart.addItem(new Product('Calça', 119.9));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDicount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
