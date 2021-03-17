import { ORDER } from '../../constants';

describe('GET /store/order/{orderId} API', () => {
  beforeEach(() => {
    cy.createOrder(ORDER);
  });

  afterEach(() => {
    cy.deleteOrder(ORDER.id);
  });

  it('should return 200 when the order information are successfully returned', () => {
    cy.request('GET', `/store/order/${ORDER.id}`).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('should return 404 when the orderId is not found', () => {
    cy.deleteOrder(ORDER.id);
    cy.request({
      method: 'GET',
      url: `/store/order/${ORDER.id}`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(404);
    });
  });

  it('should return 400 when the orderId is not valid', () => {
    cy.deleteOrder(ORDER.id);
    cy.request({
      method: 'GET',
      url: `/store/order/abc`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(400);
    });
  });
});
