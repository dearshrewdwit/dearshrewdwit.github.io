function CommentList(n, e) {
  function r() {

    return [
      "<h4>COMMENTS - go <b><a href='" + n + "'>here</a></b> to leave a comment <em>(requires a github account)</em></h4>",
      "<h6>This is a static site, so I'm using Github for my comment functionality</h6>",
      e.map(function(n) {
        return new Comment(n).render()
      }).join("")
    ].join("")
  }

  return {
    render: r
  }
}
