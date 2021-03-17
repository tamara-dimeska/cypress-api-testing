import { generateRandomUsername } from '../../support/generate-random-username';

const USERNAME = generateRandomUsername();

describe('PUT /user/{username} API', () => {
  beforeEach(() => {
    cy.loginUser(USERNAME);
  });

  afterEach(() => {
    cy.deleteUser(USERNAME);
  });

  it('should return 200 when the user is successfully updated', () => {
    const USER_UPDATED = {
      id: 10,
      username: `${USERNAME}_UPDATED`,
      firstName: `${USERNAME}-firstName_UPDATED`,
      lastName: `${USERNAME}-lastname_UPDATED`,
      email: `${USERNAME}_UPDATED@email.com`,
      password: '54321',
      phone: '54321',
      userStatus: 1,
    };
    cy.request('PUT', `/user/${USERNAME}`, USER_UPDATED).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('should return 404 when the username does not exist', () => {
    const USER_UPDATED = {
      id: 10,
      username: `${USERNAME}_UPDATED`,
      firstName: `${USERNAME}-firstName_UPDATED`,
      lastName: `${USERNAME}-lastname_UPDATED`,
      email: `${USERNAME}_UPDATED@email.com`,
      password: '54321',
      phone: '54321',
      userStatus: 1,
    };
    cy.deleteUser(USERNAME);
    cy.request({
      method: 'PUT',
      url: `/user/${USERNAME}`,
      body: USER_UPDATED,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(404);
    });
  });
});
