const comments = [
    {
      id: 1,
      text: "This is the first comment",
      parentId: null,
      replies: [
        {
          id: 2,
          text: "This is a reply to the first comment",
          parentId: 1,
          replies: [
            {
              id: 3,
              text: "This is a nested reply",
              parentId: 2,
              replies: []
            }
          ]
        }
      ]
    },
    {
      id: 4,
      text: "This is an independent comment",
      parentId: null,
      replies: []
    },
  ];

  function createComment(comment, level){
    const div = document.createElement('div');
    div.classList.add('comment');
    div.style.marginLeft = `${level * 20}px`;
    div.textContent = comment.text;

    for (const reply of comment.replies) {
        div.appendChild(createComment(reply, level + 1));
        div.classList.add('reply');
    }
    return div;
  } 

  function displayComments(comments) {
    const container = document.getElementById('comments-container');
    container.innerHTML = '';
    for (const comment of comments) {
      if (comment.parentId === null) {
        container.appendChild(createComment(comment, 0));
      }
    }
  }
  displayComments(comments);