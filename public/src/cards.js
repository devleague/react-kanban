class Cards extends React.Component{
  constructor(){
    super();


  this.state = {
    forecasts:[]
  };

this.onCardData = this.onCardData.bind(this)
}

loadDataFromCard(){

  const oReq = new XMLHttpRequest();
  oReq.addEventListener('load', this.onCardData);
  oReq.addEventListener('error', this.onCardData);
  oReq.open('GET', this.props.localhost:3000);
  oReq.send();

}

componentWillMount() {
  this.loadDataFromCard()
}

ReactDOM.render(
 <Cards classUrl={localhost:3000}/>,
  document.getElementById('root')
);