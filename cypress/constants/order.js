const formatISO = require('date-fns/formatISO');

export const ORDER = {
  id: 10,
  petId: 10,
  quantity: 7,
  shipDate: formatISO(new Date()),
  status: 'approved',
  complete: true,
};
