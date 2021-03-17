import { PET } from '../../constants';

describe('DELETE /pet/{petId} API', () => {
  beforeEach(() => {
    cy.createPet(PET);
  });

  afterEach(() => {
    cy.deletePet(PET.id);
  });

  it('should return 200 when the pet is successfully deleted', () => {
    cy.request('DELETE', `/pet/${PET.id}`).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('should return 400 when the petId is invalid', () => {
    cy.request({
      method: 'DELETE',
      url: `/pet/abc`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(400);
    });
  });
});
