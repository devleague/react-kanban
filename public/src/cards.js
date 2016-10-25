// 'use strict'
// const data = [
//     { id:1, title: 'Cat are lazy AF', author: 'aaron'},
//     { id:2, title: 'dog are cool AF', author: 'tim'},
//     { id:3, title: 'sheep are ugly AF', author: 'greg'},
//     { id:4, title: 'rats are gross AF', author: 'bob'},
// ];

// this.state = {

// }
//
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
  oReq.open('GET', this.props.localhost:3000/api);
  oReq.send();

}

componentWillMount() {
  this.loadDataFromCard()
}

ReactDOM.render(
 <Cards classUrl={localhost:3000/api}/>,
  document.getElementById('root')
);