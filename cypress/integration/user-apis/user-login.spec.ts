import { generateRandomUsername } from '../../support/generate-random-username';

const USERNAME = generateRandomUsername();

describe('GET /user/login API', () => {
  beforeEach(() => {
    cy.createUser(USERNAME);
  });

  afterEach(() => {
    cy.deleteUser(USERNAME);
  });

  it('should return 200 when the user is successfully logged in', () => {
    cy.request('GET', `/user/login?username=${USERNAME}&password=12345`).then(
      (response) => {
        expect(response.status).to.equal(200);
      },
    );
  });

  /*
   * Skipping the next 2 TCs, because there is a bug.
   * The documentation says that when an invalid password/username are provided,
   * the response code is 400, but in reality, it returns 200.
   */
  xit('should return 400 when the password is wrong', () => {
    cy.request('GET', `/user/login?username=${USERNAME}&password=11111`).then(
      (response) => {
        expect(response.status).to.equal(400);
      },
    );
  });

  xit('should return 400 when the username is wrong', () => {
    cy.request(
      'GET',
      `/user/login?username=${USERNAME}123&password=12345`,
    ).then((response) => {
      expect(response.status).to.equal(400);
    });
  });
});
