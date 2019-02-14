import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Card.scss'

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, body, priority_id, created_by, assigned_to } = this.props;
    const classPriority = `card priority${priority_id}`
    return (
      <div className={classPriority} data-priority={priority_id} onClick={this.props.showCard}>
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
  return {};
};

Card = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);

export default Card;