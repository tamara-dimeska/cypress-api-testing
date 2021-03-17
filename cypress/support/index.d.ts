/// <reference types="cypress" />
import { OrderInterface, PetInterface } from '../types';

declare namespace Cypress {
  interface Chainable {
    createUser(username: string): void;
    deleteUser(username: string): void;
    loginUser(username: string): void;
    createPet(pet: PetInterface): void;
    deletePet(petId: number): void;
    createOrder(order: OrderInterface): void;
    deleteOrder(orderId: number): void;
  }
}
