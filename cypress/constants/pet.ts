import { PetInterface } from '../types';

export const PET: PetInterface = {
  id: 10,
  name: 'puppy',
  category: {
    id: 1,
    name: 'Dogs',
  },
  photoUrls: ['photo_url'],
  tags: [
    {
      id: 0,
      name: 'dog',
    },
  ],
  status: 'available',
};
