class TODO extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: true
    }
  }

  showDescription() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    return this.props.items.filter(item => item.status === 'ToDo').map( item => <div key={item.id} onClick={this.showDescription.bind(this)}>{item.name}{!this.state.isHidden && <div>{item.description}</div>}</div>)
  }
}  

export default TODO;