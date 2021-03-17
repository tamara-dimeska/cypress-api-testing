import { PET } from '../../constants';
import { PetInterface } from '../../types';
PET.status = 'sold';

describe('GET /pet/findByStatus API', () => {
  beforeEach(() => {
    cy.createPet(PET);
  });

  afterEach(() => {
    cy.deletePet(PET.id);
  });

  it('should return 200 when a valid status is entered', () => {
    cy.request('GET', `/pet/findByStatus?status=sold`).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  // skipping for now, needs to be fixed
  xit('should return an array with the pet found', () => {
    cy.request('GET', `/pet/findByStatus?status=sold`).then((response) => {
      expect(doesObjectExsistsInArray(response.body, PET)).to.be.true;
    });
  });

  it('should return 400 when the tag is invalid', () => {
    cy.deletePet(PET.id);
    cy.request({
      method: 'GET',
      url: `/pet/findByStatus?status=buy`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(400);
    });
  });
});

function doesObjectExsistsInArray(
  pets: PetInterface[],
  pet: PetInterface,
): boolean {
  return pets.includes(pet);
}
