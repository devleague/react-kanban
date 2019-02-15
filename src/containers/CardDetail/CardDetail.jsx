import React, { Component } from 'react';
import './CardDetail.scss';
import { connect } from 'react-redux';
import { deleteCard } from '../../actions';

class CardDetail extends Component {

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  };

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  };

  handleClick = (e) => {
    if (this.node.contains(e.target)) {
      return;
    };
    this.props.closeCard();
  };

  editClick = () => {
    const { id, title, body, priority_id, status_id, created_by, assigned_to } = this.props.card;

    this.props.onSelect({
      id,
      title,
      body,
      priority_id,
      status_id,
      created_by,
      assigned_to
    });
  };

  deleteClick = () => {
    const { id } = this.props.card;

    this.props.onDelete({
      id
    });
    this.props.closeCard();
  }

  render() {
    const { id, title, body, priority_id, status_id, created_by, assigned_to } = this.props.card;
    const classDetail = `cardDetail priority${priority_id}`
    const statusDetail = `status status${status_id}`
    return (
      <div className={classDetail} ref={node => this.node = node}>
        <div className={statusDetail}></div>
        <div className="title">{title}</div>
        <div className="body">{body}</div>
        <div className="assigned">Assigned to: {assigned_to}</div>
        <div className="created">Created By: {created_by}</div>
        <div className="optionBox">
          <div className="option" onClick={this.deleteClick}>Delete</div>
          <div className="option" onClick={this.editClick}>Edit</div>
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {};
}
const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (cardId) => {
      dispatch(deleteCard(cardId));
    }
  };
};

CardDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardDetail);

export default CardDetail;