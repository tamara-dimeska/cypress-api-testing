import { OrderInterface, PetInterface } from '../types';

Cypress.Commands.add('createUser', (username: string) => {
  cy.request('POST', '/user', {
    id: 10,
    username: username,
    firstName: `${username}-firstName`,
    lastName: `${username}-lastname`,
    email: `${username}@email.com`,
    password: '12345',
    phone: '12345',
    userStatus: 1,
  });
});

Cypress.Commands.add('deleteUser', (username: string) => {
  cy.request('DELETE', `/user/${username}`);
});

Cypress.Commands.add('loginUser', (username: string) => {
  cy.createUser(username);
  cy.request('GET', `/user/login?username=${username}&password=12345`);
});

Cypress.Commands.add('createPet', (pet: PetInterface) => {
  cy.request('POST', '/pet', pet);
});

Cypress.Commands.add('deletePet', (petId: number) => {
  cy.request('DELETE', `/pet/${petId}`);
});

Cypress.Commands.add('createOrder', (order: OrderInterface) => {
  cy.request('POST', '/store/order', order);
});

Cypress.Commands.add('deleteOrder', (orderId: number) => {
  cy.request('DELETE', `/store/order/${orderId}`);
});
