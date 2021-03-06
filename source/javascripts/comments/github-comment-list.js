function GithubCommentList(t, b, e) {
  var n = "https://github.com",
    o = "https://api.github.com/repos",
    s = "/dearshrewdwit/dearshrewdwit.github.io/issues/",
    i = n + s + e,
    a = o + s + e + "/comments";

    $(document).ready(function() {
      $.ajax(a, {
        headers: {
          Accept: "application/vnd.github.v3.html+json"
        },
        dataType: "json",
        success: function(e) {
          t.append(new CommentList(i, e).render())
          b.append(new CommentCount(e).render())
        },
        error: function() {
          t.append("Comments are not open for this post yet.")
        }
      })
  })
}
