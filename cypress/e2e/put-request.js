/// <reference types = "cypress"/>

describe("Put Request", () => {
  it("Update an existing post via /posts api", () => {
    cy.request({
      method: "PUT",
      url: "http://localhost:3000/posts/2",
      body: {
        title: "Selenium vs Cypress - which one is better?",
        author: "John Smithson",
      },
    }).then((response) => {
      expect(response.status).to.deep.eq(200);
    });
  });
});
