import { PET } from '../../constants';

PET.tags = [
  {
    id: 0,
    name: 'dog',
  },
  {
    id: 1,
    name: 'pet',
  },
];

describe('GET /pet/findByTags API', () => {
  beforeEach(() => {
    cy.createPet(PET);
  });

  afterEach(() => {
    cy.deletePet(PET.id);
  });

  it('should return 200 when one valid tag is entered', () => {
    cy.request('GET', `/pet/findByTags?tags=dog`).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('should return 200 when multiple valid tags are entered', () => {
    cy.request('GET', `/pet/findByTags?tags=dog,pet`).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('should return an array with the pet found', () => {
    cy.request('GET', `/pet/findByTags?tags=dog`).then((response) => {
      expect(response.body).to.deep.equal([PET]);
    });
  });

  it('should return 400 when the tag is invalid', () => {
    cy.deletePet(PET.id);
    cy.request({
      method: 'GET',
      url: `/pet/findByTags?tags=`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(400);
    });
  });
});
