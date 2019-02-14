import React, { Component } from 'react';
import './CardDetail.scss';
import { connect } from 'react-redux';
import { addCard } from '../../actions';

class CardDetail extends Component {
  constructor(props) {
    super(props);

    // this.handleTitleOnChange = this.handleTitleOnChange.bind(this);
    // this.handleBodyOnChange = this.handleBodyOnChange.bind(this);
    // this.handlePriorityOnChange = this.handlePriorityOnChange.bind(this);
    // this.handleAssignedOnChange = this.handleAssignedOnChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  };

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  };

  // handleTitleOnChange(e) {
  //   const value = e.target.value;
  //   this.setState({ title: value });
  // };

  // handleBodyOnChange(e) {
  //   const value = e.target.value;
  //   this.setState({ body: value });
  // };

  // handlePriorityOnChange(e) {
  //   const value = e.target.value;
  //   this.setState({ priority_id: value });
  // };

  // handleAssignedOnChange(e) {
  //   const value = e.target.value;
  //   this.setState({ assigned_to: value });
  // };

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const { id, title, body, priority_id, status_id, created_by, assigned_to } = this.state;

  //   this.props.onAdd({
  //     id,
  //     title,
  //     body,
  //     priority_id,
  //     status_id,
  //     created_by,
  //     assigned_to
  //   });

  //   this.setState({
  //     id: '0',
  //     title: '',
  //     body: '',
  //     priority_id: '4',
  //     status_id: '1',
  //     created_by: '0',
  //     assigned_to: '0'
  //   });

  //   this.props.show();
  // };

  handleClick = (e) => {
    if (this.node.contains(e.target)) {
      return;
    };
    this.props.closeCard();
  };

  render() {
    return (
      <div ref={node => this.node = node}>
        <div className="cardDetail">
          HELLO!
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
    onAdd: (card) => {
      dispatch(addCard(card));
    }
  };
};

CardDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardDetail);

export default CardDetail;