import { PET } from '../../constants';

describe('POST /pet API', () => {
  afterEach(() => {
    cy.deletePet(PET.id);
  });

  it('should return 200 when a new pet is successfully created', () => {
    cy.request('POST', '/pet', PET).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});
