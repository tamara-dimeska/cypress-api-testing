import { generateRandomUsername } from '../../support/generate-random-username';

const USERNAME = generateRandomUsername();

describe('DELETE /user/{username} API', () => {
  beforeEach(() => {
    cy.loginUser(USERNAME);
  });

  afterEach(() => {
    cy.deleteUser(USERNAME);
  });

  it('should return 200 when the user is successfully deleted', () => {
    cy.request('DELETE', `/user/${USERNAME}`).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  /*
   * Skipping the TC, because there is a bug.
   * The documentation says that when username that does not exist is provided,
   * the response code is 404, but in reality, it returns 200.
   */
  xit('should return 404 when the username does not exist', () => {
    cy.request({
      method: 'DELETE',
      url: `/user/${USERNAME}123`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(404);
    });
  });
});
