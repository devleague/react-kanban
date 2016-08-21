console.log("Hi");

const Card = React.createClass({
  render: function() {
    return (
      <div className="Card">
          Ticket ID #
          {this.props.id}
          <br />
          {this.props.Title}
          <br />
          {this.props.Priority}
            <br />
          {this.props.Status}
          <form onDeleteCard={this.handleDelete}>
            <input type="submit" value="Delete" onDeleteCard={this.handleDelete}/>
          </form>
      </div>
    );
  }
});

const CardList = React.createClass({
  render: function() {
    const status = this.props.status;
    const cards = this.props.data
      .filter(function (card, index) {
        return card.Status === status;
      })
      .sort(function(cardA, cardB) {
        return cardB.Priority - cardA.Priority;
      })
      .map(function (card) {
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
    return {
      Title: '',
      Priority: '',
      Status: '',
      CreatedBy: '',
      AssignedTo: ''
    };
  },
  handleTitleChange: function(e) {
    this.setState({
      Title: e.target.value
    });
  },
  handlePriorityChange: function(e) {
    this.setState({
      Priority: e.target.value
    });
  },
  handleStatusChange: function(e) {
    this.setState({
      Status: e.target.value
    });
  },
  handleCreatedByChange: function(e) {
    this.setState({
      CreatedBy: e.target.value
    });
  },
  handleAssignedToChange: function(e) {
    this.setState({
      AssignedTo: e.target.value
    });
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var Title = this.state.Title.trim();
    var Priority = this.state.Priority.trim();
    var Status = this.state.Status.trim();
    var CreatedBy = this.state.CreatedBy.trim();
    var AssignedTo = this.state.AssignedTo.trim();
    if (!Title) {
      Title= "New Task";
    }
    if (!Priority) {
      Priority = 1;
    }
    if (!Status) {
      Status = "Queue";
    }
    if (!CreatedBy) {
      CreatedBy = " ";
    }
    if (!AssignedTo) {
      AssignedTo = " ";
    }
    this.props.onCardSubmit({
      Title: Title,
      Priority: Priority,
      Status: Status,
      CreatedBy: CreatedBy,
      AssignedTo: AssignedTo
    });
    this.setState({
      Title: '',
      Priority: '',
      Status: '',
      CreatedBy: '',
      AssignedTo: ''
    });
  },
  handleDelete: function(e) {
    this.props.onDeleteCard({
      Title: Title,
      Priority: Priority,
      Status: Status,
      CreatedBy: CreatedBy,
      AssignedTo: AssignedTo
    });
    this.setState({
      Title: '',
      Priority: '',
      Status: '',
      CreatedBy: '',
      AssignedTo: ''
    });
  },
  render: function() {
    return (
      <form className="cardForm" onSubmit={this.handleSubmit}>
        <div className="Header">Create New Task!</div>
        <div className="input">
          Title <input
            type="text"
            value={this.state.Title}
            onChange={this.handleTitleChange}
          />
          Priority Level: {this.state.Priority} (Drag Me!) <input
            type="range"
            min="0"
            max="10"
            name="Priority"
            value={this.state.Priority}
            onChange={this.handlePriorityChange}
          />
          <div>
            Queue <input
              type="radio"
              name="status"
              value="Queue"
              onChange={this.handleStatusChange}
            />
            Progress <input
              type="radio"
              name="status"
              value="Progress"
              onChange={this.handleStatusChange}
            />
            Done <input
              type="radio"
              name="status"
              value="Done"
              onChange={this.handleStatusChange}
            />
          </div>
            Created By<input
              type="text"
              value={this.state.CreatedBy}
              onChange={this.handleCreatedByChange}
            />
          Assigned To<input
            type="text"
            value={this.state.AssignedTo}
            onChange={this.handleAssignedToChange}
          />
          <input type="submit" value="Post" />
        </div>
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
        this.setState({
          data: data
        })
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
        this.setState({
          card: card
        })
        this.loadCardsFromServer();
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("oh no");
      }.bind(this)
    });
  },

  deleteCard: function(card) {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'DELETE',
      data: {
        "Title": Title
      },
      success: function(card) {
        console.log(card);
        this.setState({
          card: card
        })
        this.loadCardsFromServer();
      }.bind(this),
      error: function(xhr, status, err) {
        console.log("omg");
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
            <div className="Header"> To do </div>
            <CardList
              data={this.state.data}
              status="Queue"
            />
          </div>
          <div className="Board" id="Doing">
            <div className="Header"> Doing </div>
            <CardList
              data={this.state.data}
              status="Progress"
            />
          </div>
          <div className="Board" id="Done">
            <div className="Header"> Done </div>
            <CardList
              data={this.state.data}
              status="Done"
            />
          </div>
        </div>
        <CardForm onCardSubmit={this.handleCardSubmit}/>
        <CardForm onDeleteCard={this.handleDelete}/>
      </div>
    );
  }
});


ReactDOM.render(
  <KanbanBoard url="/tasks"/>,
  document.getElementById('app')
);