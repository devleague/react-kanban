"use strict";

console.log("Hi");

var Card = React.createClass({
  displayName: "Card",

  render: function render() {
    return React.createElement(
      "div",
      { className: "Card" },
      "Ticket ID #",
      this.props.id,
      React.createElement("br", null),
      this.props.Title,
      React.createElement("br", null),
      this.props.Priority,
      React.createElement("br", null),
      this.props.Status
    );
  }
});

var CardList = React.createClass({
  displayName: "CardList",

  render: function render() {
    var status = this.props.status;
    var cards = this.props.data.filter(function (card, index) {
      return card.Status === status;
    }).map(function (card) {
      return React.createElement(Card, {
        id: card.id,
        Title: card.Title,
        Priority: card.Priority,
        Status: card.Status,
        CreatedBy: card.CreatedBy,
        AssignedTo: card.AssignedTo
      });
    });
    return React.createElement(
      "div",
      { className: "cardList" },
      cards
    );
  }
});

var CardForm = React.createClass({
  displayName: "CardForm",

  getInitialState: function getInitialState() {
    return { Title: '', Priority: '', Status: '', CreatedBy: '', AssignedTo: '' };
  },
  handleTitleChange: function handleTitleChange(e) {
    this.setState({ Title: e.target.value });
  },
  handlePriorityChange: function handlePriorityChange(e) {
    this.setState({ Priority: e.target.value });
  },
  handleStatusChange: function handleStatusChange(e) {
    this.setState({ Status: e.target.value });
  },
  handleCreatedByChange: function handleCreatedByChange(e) {
    this.setState({ CreatedBy: e.target.value });
  },
  handleAssignedToChange: function handleAssignedToChange(e) {
    this.setState({ AssignedTo: e.target.value });
  },
  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    var Title = this.state.Title.trim();
    var Priority = this.state.Priority.trim();
    var Status = this.state.Status.trim();
    var CreatedBy = this.state.CreatedBy.trim();
    var AssignedTo = this.state.AssignedTo.trim();
    if (!Title) {
      Title = "New Task";
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
  render: function render() {
    return React.createElement(
      "form",
      { className: "cardForm", onSubmit: this.handleSubmit },
      React.createElement(
        "div",
        { className: "input", align: "center" },
        "Title ",
        React.createElement("input", {
          type: "text",
          placeholder: "Title",
          value: this.state.Title,
          onChange: this.handleTitleChange
        }),
        "Priority ",
        React.createElement("input", {
          type: "range",
          min: "0",
          max: "10",
          name: "Priority",
          placeholder: "Priority",
          value: this.state.Priority,
          onChange: this.handlePriorityChange
        }),
        React.createElement(
          "form",
          null,
          "Queue ",
          React.createElement("input", {
            type: "radio",
            placeholder: "Status",
            name: "Queue",
            value: this.state.Status,
            onChange: this.handleStatusChange
          }),
          "Progress ",
          this.state.Status,
          " ",
          React.createElement("input", {
            type: "radio",
            placeholder: "Status",
            name: "Progress",
            value: this.state.Status,
            onChange: this.handleStatusChange
          }),
          "Done ",
          React.createElement("input", {
            type: "radio",
            placeholder: "Status",
            name: "Done",
            value: this.state.Status,
            onChange: this.handleStatusChange
          })
        ),
        "Created By",
        React.createElement("input", {
          type: "text",
          placeholder: "Created By",
          value: this.state.CreatedBy,
          onChange: this.handleCreatedByChange
        }),
        "Assigned To",
        React.createElement("input", {
          type: "text",
          placeholder: "Assigned To",
          value: this.state.AssignedTo,
          onChange: this.handleAssignedToChange
        }),
        React.createElement("input", { type: "submit", value: "Post" })
      )
    );
  }
});

var KanbanBoard = React.createClass({
  displayName: "KanbanBoard",

  loadCardsFromServer: function loadCardsFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        console.log(data);
        this.setState({ data: data });
      }.bind(this)
    });
  },

  handleCardSubmit: function handleCardSubmit(card) {
    var testing = "http://10.0.1.";
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: card,
      success: function (card) {
        console.log(card);
        this.setState({ card: card });
        this.loadCardsFromServer();
      }.bind(this),
      error: function (xhr, status, err) {
        console.error("oh no");
      }.bind(this)
    });
  },

  getInitialState: function getInitialState() {
    return {
      data: []
    };
  },

  componentDidMount: function componentDidMount() {
    this.loadCardsFromServer();
  },

  render: function render() {
    return React.createElement(
      "div",
      { className: "kanbanBoard" },
      React.createElement(
        "div",
        { className: "Header" },
        " KanbanBoard "
      ),
      React.createElement(
        "div",
        { className: "Boards" },
        React.createElement(
          "div",
          { className: "Board", id: "To Do" },
          React.createElement(
            "div",
            { className: "Header" },
            " To do"
          ),
          React.createElement(CardList, {
            data: this.state.data,
            status: "Queue"
          })
        ),
        React.createElement(
          "div",
          { className: "Board", id: "Doing" },
          React.createElement(
            "div",
            { className: "Header" },
            " Doing "
          ),
          React.createElement(CardList, {
            data: this.state.data,
            status: "Progress"
          })
        ),
        React.createElement(
          "div",
          { className: "Board", id: "Done" },
          React.createElement(
            "div",
            { className: "Header" },
            " Done "
          ),
          React.createElement(CardList, {
            data: this.state.data,
            status: "Done"
          })
        )
      ),
      React.createElement(CardForm, { onCardSubmit: this.handleCardSubmit })
    );
  }
});

ReactDOM.render(React.createElement(KanbanBoard, { url: "/tasks" }), document.getElementById('app'));