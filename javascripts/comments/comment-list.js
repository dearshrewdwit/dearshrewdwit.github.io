function CommentList(e,n){function t(){return["<h4>COMMENTS - go <b><a href='"+e+"'>here</a></b> to leave a comment <em>(requires a github account)</em></h4>","<h6>This is a static site, so I'm using Github for my comment functionality</h6>",n.map(function(e){return new Comment(e).render()}).join("")].join("")}return{render:t}}