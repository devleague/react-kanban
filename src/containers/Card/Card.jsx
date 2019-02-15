import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Card.scss'
import { selectCard } from '../../actions';

class Card extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { id, title, body, priority_id, status_id, created_by, assigned_to } = this.props;

    this.props.onSelect({
      id,
      title,
      body,
      priority_id,
      status_id,
      created_by,
      assigned_to
    });

    this.props.showCard();
  }

  render() {
    const { title, priority_id, assigned_to } = this.props;
    const classPriority = `card priority${priority_id}`
    return (
      <div className={classPriority} data-priority={priority_id} onClick={this.handleClick}>
        <div>{title}</div>
        <div>{assigned_to}</div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {};
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSelect: (cardData) => {
      dispatch(selectCard(cardData));
    }
  };
};

Card = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);

export default Card;