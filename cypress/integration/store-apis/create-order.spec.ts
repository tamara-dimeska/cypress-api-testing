import { ORDER } from '../../constants';

describe('POST /store/order API', () => {
  it('should return 200 when a new order is successfully created', () => {
    cy.request('POST', '/store/order', ORDER).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('should return 400 when a new order is not successfully created', () => {
    cy.request({
      method: 'POST',
      url: '/store/order',
      body: { ...ORDER, id: 'abd' },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(400);
    });
  });
});
