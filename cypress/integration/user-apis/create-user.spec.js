import { generateRandomUsername } from '../../support/generate-random-username';

const USERNAME = generateRandomUsername();
const USER_OBJECT = {
  id: 1,
  username: USERNAME,
  firstName: `${USERNAME}-firstName`,
  lastName: `${USERNAME}-lastname`,
  email: `${USERNAME}@email.com`,
  password: '12345',
  phone: '12345',
  userStatus: 1,
};

describe('POST /user API', () => {
  it('should return 200 when a new user is successfully created', () => {
    cy.request('POST', '/user', USER_OBJECT).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});
