/// <reference types = "cypress"/>

describe("Delete Request", () => {
  it("Delete an existing post via /posts api", () => {
    cy.request({
      method: "DELETE",
      url: "http://localhost:3000/posts/46WeBIw",
    }).then((response) => {
      expect(response.status).to.deep.eq(200);
    });
  });
});
