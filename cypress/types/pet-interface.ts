export interface PetInterface {
  id: number;
  name: string;
  category: CategoryInterface;
  photoUrls: string[];
  tags: TagInterface[];
  status: string;
}

interface CategoryInterface {
  id: number;
  name: string;
}

interface TagInterface {
  id: number;
  name: string;
}
