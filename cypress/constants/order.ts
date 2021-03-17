import { formatISO } from 'date-fns';
import { OrderInterface } from '../types';

export const ORDER: OrderInterface = {
  id: 10,
  petId: 10,
  quantity: 7,
  shipDate: formatISO(new Date()),
  status: 'approved',
  complete: true,
};
