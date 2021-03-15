const chai = require('chai'),
  expect = chai.expect;

chai.use(require('chai-like'));
chai.use(require('chai-things'));

const { PET } = require('../../constants/pet');
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

  it('should return an array with the pet found', () => {
    cy.request('GET', `/pet/findByStatus?status=sold`).then((response) => {
      expect(response.body).to.be.an('array').that.contains.something.like(PET);
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
