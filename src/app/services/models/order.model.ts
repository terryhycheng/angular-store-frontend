import { CartData } from './cart-data.model';

type Form = {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  payment: string;
};

export type Order = {
  orderId: string;
  totalPrice: number;
  order: CartData[];
  info: Form;
};
