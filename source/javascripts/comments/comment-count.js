function CommentCount(data) {
  function render() {

    return [
      "<span> (" + data.length + ")</span>"
    ].join("")
  }

  return {
    render: render
  }
}
