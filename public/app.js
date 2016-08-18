console.log("Hi");

const Comment = React.createClass({
  // rawMarkup: function() {
  //   var md = new Remarkable();
  //   //const rawMarkup = md.render(this.props.children.toString());
  //   return { __html: rawMarkup };
  // },
  render: function() {
    var md = new Remarkable();
    return (
      <div className="comment">
      <h1>{this.props.Title}</h1>
      </div>
    );
  }
});

const CommentList = React.createClass({
  render: function() {
    const commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment Title={comment.Title} key={comment.id}>
        </Comment>
      );
    })
    return (
      <div className="commentList">
      { commentNodes }
      </div>
    );
  }
});

const CommentBox = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        console.log(data);
        this.setState({ data: data })
      }.bind(this)
    });
  },

  getInitialState: function() {
      return {
          data: []
      }
  },

  componentDidMount: function() {
    this.loadCommentsFromServer();
  },

  render: function() {
    return (
      <div className="commentBox">
      <CommentList data={this.state.data}/>
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox url="/tasks"/>,
  document.getElementById('app')
);