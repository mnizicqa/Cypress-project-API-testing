describe("Post,Get,Put and Delete Request", () => {
  let comments = new Array();

  let comment =
    Math.random().toString(36).substring(1) +
    Math.random().toString(36).substring(1);
  let randomPostId = Math.floor(Math.random() * 1000 + 1);
  let id = Math.floor(Math.random() * 1000 + 1);

  it("Create a new comment", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/comments",
      body: {
        body: comment,
        postId: randomPostId,
        id: id,
      },
    }).then((response) => {
      expect(response.status).deep.equal(201);
    });
  });

  it("Locate and assert the new comment", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3000/comments",
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => {
        let body = JSON.parse(JSON.stringify(response.body));
        body.forEach((item) => {
          comments.push(item["body"]);
        });
      })
      .then(() => {
        let latestComment = comments[comments.length - 1];
        expect(latestComment).to.eq(comment);
      });
  });

  it("Update the new comment", () => {
    cy.request({
      method: "PUT",
      url: "http://localhost:3000/comments/" + id,
      body: {
        body: comment,
        postId: randomPostId,
      },
    }).then((response) => {
      expect(response.status).deep.equal(200);
    });
  });

  it("Delete the new comment", () => {
    cy.request({
      method: "DELETE",
      url: "http://localhost:3000/comments/" + id,
    }).then((response) => {
      expect(response.status).deep.equal(200);
    });
  });
});
