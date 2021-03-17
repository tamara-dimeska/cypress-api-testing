import { PET } from '../../constants';

describe('GET /pet/{petId} API', () => {
  beforeEach(() => {
    cy.createPet(PET);
  });

  afterEach(() => {
    cy.deletePet(PET.id);
  });

  it('should return 200 when a valid petId is entered', () => {
    cy.request('GET', `/pet/${PET.id}`).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('should return the pet object', () => {
    cy.request('GET', `/pet/${PET.id}`).then((response) => {
      expect(response.body).to.deep.equal(PET);
    });
  });

  it('should return 404 when the petId does not exist', () => {
    cy.deletePet(PET.id);
    cy.request({
      method: 'GET',
      url: `/pet/${PET.id}`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(404);
    });
  });

  it('should return 400 when the petId is invalid', () => {
    cy.request({
      method: 'GET',
      url: `/pet/abc`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(400);
    });
  });
});
