function Comment(n){function e(){var e=new Date(n.created_at);return["<div class='article-comment'>","<img class='article-comment-avatar' src='"+n.user.avatar_url+"'>","<a href='"+n.user.html_url+"'>"+n.user.login+"</a>","<span> - "+e.toLocaleString()+"</span>","<div id='gh-comment-hr'></div>","<div class='article-comment-body'>"+n.body_html+"</div>","</div>"].join("")}return{render:e}}function CommentList(n,e){function t(){return["<h4>COMMENTS - go <b><a href='"+n+"'>here</a></b> to leave a comment <em>(requires a github account)</em></h4>","<h6>This is a static site, so I'm using Github for my comment functionality</h6>",e.map(function(n){return new Comment(n).render()}).join("")].join("")}return{render:t}}function CommentCount(n){function e(){return["<span> ("+n.length+")</span>"].join("")}return{render:e}}function GithubCommentList(n,e,t){var r="https://github.com",o="https://api.github.com/repos",i="/dearshrewdwit/dearshrewdwit.github.io/issues/",a=r+i+t,m=o+i+t+"/comments";$(document).ready(function(){$.ajax(m,{headers:{Accept:"application/vnd.github.v3.html+json"},dataType:"json",success:function(t){n.append(new CommentList(a,t).render()),e.append(new CommentCount(t).render())},error:function(){n.append("Comments are not open for this post yet.")}})})}