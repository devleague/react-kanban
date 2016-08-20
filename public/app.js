console.log("Hi");

const Card = React.createClass({
  render: function() {
    return (
      <div className="Cards">
          {this.props.Title}<br />
          {this.props.Priority}<br />
          {this.props.id}<br />
          {this.props.Status}
      </div>
    );
  }
});

const CardList = React.createClass({

  render: function() {
    const status = this.props.status;
    const cards = this.props.data.filter(function (card, index) {
      return card.Status === status;
    }).map(function (card) {
      return (
        <Card
          id={card.id}
          Title={card.Title}
          Priority={card.Priority}
          Status={card.Status}
          CreatedBy={card.CreatedBy}
          AssignedTo={card.AssignedTo}
        >
        </Card>
      );
    })
    return (
      <div className="cardList">
      { cards }
      </div>
    );
  }
});

const CardForm = React.createClass({
  getInitialState: function() {
    return {Title: ''};
  },
  handleTitleChange: function(e) {
    this.setState({Title: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var Title = this.state.Title.trim();
    if (!Title) {
      return;
    }
    this.props.onCardSubmit({ Title: Title});
    this.setState({Title: ''});
  },
  render: function() {
    return (
      <form className="cardForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={this.state.Title}
          onChange={this.handleTitleChange}
        />
        <input type="submit" value="Post" />
        <h1>{this.state.Title}</h1>
      </form>
    );
  }
});

const KanbanBoard = React.createClass({
  loadCardsFromServer: function() {
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

  handleCardSubmit: function(card) {
    var testing = "http://10.0.1."
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: card,
      success: function(card) {
        console.log(card);
        this.setState({ card: card })
        this.loadCardsFromServer();
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("oh no");
      }.bind(this)
    });
  },

  getInitialState: function() {
      return {
          data: []
      }
  },

  componentDidMount: function() {
    this.loadCardsFromServer();
  },

  render: function() {
    return (
      <div className="kanbanBoard">
        <div className="Header"> KanbanBoard </div>
        <div className="Boards">
          <div className="Board" id="To Do">
            <div className="Header"> To do</div>
            <CardList
            data={this.state.data}
            status="Queue"
            />
          </div>
          <div className="Board" id="Doing">
            <div className="Header"> Doing </div>
            <CardList
              data={this.state.data}
              status={null}
            />
          </div>
          <div className="Board" id="Done">
            <div className="Header"> Done </div>
          </div>
        </div>
        <CardForm onCardSubmit={this.handleCardSubmit}/>
      </div>
    );
  }
});


ReactDOM.render(
  <KanbanBoard url="/tasks"/>,
  document.getElementById('app')
);