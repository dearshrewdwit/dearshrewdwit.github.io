function Comment(r){
  function a(){
    var a = new Date(r.created_at);

    return [
      "<div class='article-comment'>",
      "<img class='article-comment-avatar' src='"+r.user.avatar_url+"'>",
      "<a href='"+r.user.html_url+"'>" +r.user.login + "</a>",
      "<span> - " + a.toLocaleString() + "</span>",
      "<div id='gh-comment-hr'></div>",
      "<div class='article-comment-body'>" + r.body_html + "</div>",
      "</div>"
    ].join("")
  }
  
  return {
    render:a
  }
}
