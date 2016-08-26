import React from 'react';
import CardList from './CardList';
import CardForm from './CardForm';
import $ from 'jquery';

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

  deleteCard: function(id) {
    $.ajax({
      url: `${this.props.url}/${id}`,
      dataType: 'json',
      type: 'DELETE',
      success: function(card) {
        console.log(card);
        this.loadCardsFromServer();
      }.bind(this),
      error: function(xhr, status, err) {
        console.log("omg");
      }.bind(this)
    });
  },

  editCard: function(id) {
    $.ajax({
      url: `${this.props.url}/${id}`,
      dataType: 'json',
      type: 'PUT',
      success: function(card) {
        console.log("wassup son");
        this.loadCardsFromServer();
      }.bind(this),
      error: function(xhr, status, err) {
        console.log("omg");
      }.bind(this)
    });
  },

  doneCard: function(Status, id) {
    $.ajax({
      url: `${this.props.url}/${id}`,
      dataType: 'json',
      type: 'PUT',
      data: Status,
      success: function(card) {
        console.log("wassup son");
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
              deleteCard={this.deleteCard}
              editCard={this.editCard}
              doneCard={this.doneCard}
            />
          </div>
          <div className="Board" id="Doing">
            <div className="Header"> Doing </div>
            <CardList
              data={this.state.data}
              status="Progress"
              deleteCard={this.deleteCard}
              editCard={this.editCard}
              doneCard={this.doneCard}
            />
          </div>
          <div className="Board" id="Done">
            <div className="Header"> Done </div>
            <CardList
              data={this.state.data}
              status="Done"
              deleteCard={this.deleteCard}
              editCard={this.editCard}
              doneCard={this.doneCard}
            />
          </div>
        </div>
        <CardForm onCardSubmit={this.handleCardSubmit}/>
      </div>
    );
  }
});

export default KanbanBoard;