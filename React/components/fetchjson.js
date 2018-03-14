import axios from 'axios';
import React from 'react';
import styles from './fetchjson.css';



export class Fetchjson extends React.Component{

  constructor(props) {
  super(props);
  this.value = {
    filmArray: [],
    flagVar: false
      }
      this.loadJsonData = this.loadJsonData.bind(this);
      this.getJsonData = this.getJsonData.bind(this);
      
  }

  loadJsonData() {
      this.getJsonData();
    }
    


  
  getJsonData () {
    axios.get('./components/data.json',{
  headers: {
    'Content-Type': 'application/json'
  }
    }).then(response => {  
        this.setState({filmArray: response.data, flagVar: true})
  })

  }
  
//getJsonList() Function to iterate list items from filmArray and render in table rows

getJsonList() {
     const listItems = [];
     if(this.state && this.state.filmArray && this.state.filmArray.length){
        let listData = !!this.state.filmArray && this.state.filmArray;

        listData.filter((mems, i) => {
            listItems.push(
              <tr key={i}>
            <td>{mems.name}</td>
            <td>{mems.age}</td>
            <td>{mems.email}</td>
            <td>{mems.gender}</td>
            <td>{mems.phone}</td>
            <td>{mems.company}</td>
            </tr>)
        });
      }
      return listItems;
  }
  

 render(){ 
  return (
 <div className="table-responsive">
 <h1>JSON Data to load 10000 employees in ReactJS </h1>
<button onClick={this.loadJsonData}>Load data</button>
        <table className="table table-bordered table-striped"> 
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Company</th>
          <th>Phone</th>
        </tr>
        <tbody>
          {this.getJsonList()}
          </tbody>
        </table>
     </div>);
    
  }

}






