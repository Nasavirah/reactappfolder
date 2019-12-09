import React, { Component } from 'react';
import axios from 'axios';

class Car extends Component {
  constructor(props) {
    super(props)
    this.state = { Car: [] }
    // this.state = {value: ''};

    // this.handleChange = this.handleChange.bind(this);
    
    axios('http://103.3.60.53/api/curated_miami?car_year=&car_make=FERRARI&car_model=')
      .then(res => { console.log(res.data); this.setState({ Car: res.data }) 
    
    let carValue = this.state.Car;
    console.log(carValue);
    let arr = []
    carValue.forEach((car, index) => {
      let milage =  car.mileage.split(' ')[0];
      if(parseInt(milage)>5000){
      arr.push(car);
      }
    });
    
    });
  }
  
  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }
  

  // loadFromApi() {
  //   fetch('http://103.3.60.53/api/curated_miami?car_year=&car_make=FERRARI&car_model=')
  //       .then(response => response.json())
  //       .then(data => {
  //           this.setState({ Car: data })
  //           this.countData();
  //        })
  //       .catch(error => console.log('error fetching', error))
// }
  render() {
    return (
      
      <div className="bg-light ">
      
        <h4 className="text-dark">Car Model</h4>
        <label>
          YEAR:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          MODEL:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        
        <CarTbl carList={this.state.Car}></CarTbl>
      </div>
    );
    
  }
}

// handleFilterButtons = (event) => {
//   var valueInput = event.target.value;
//   var apiFilters = `http://103.3.60.53/api/curated_miami?car_year=&car_make=FERRARI&car_model=`;
// axios.get(apiFilters)
//     .then( (res) =>{

//         let Car=[];
//           res.data.forEach((req) => {
//           if (req.mileage >= "3000") {
//             req.mileage.forEach((res) => {
//               if (res === valueInput) {
//                   Car.push(req);
//                 }
//               })
//             } 
//           })
//         this.setState({Car:Car});   
//     })
//   .catch(function (error) {
//     console.log(error);
//   })

const CarTbl = (props) => {
  return <div className="row">
    {
      props.carList.length > 0 ?
        <div className="container fluid">
          <div className="row mx-auto">
          
            <table className="bg-dark text-white text-left table table-bordered bg-light  width:100%">
              <thead><tr>
          <th>mileage</th>
          <th>year</th>
          {/* <th>url</th>
          <th>source</th> */}
          <th>model</th>
          <th>make</th>
          <th>price</th>
        </tr>
        </thead>
        <tbody>
          
    {props.carList.map((Car) => (
      <tr className="text-left" key={Car.mileage}>
        
        <td>{Car.mileage}</td>
        <td>{Car.year}</td>
        {/* <td>{Car.url}</td>
        <td>{Car.source}</td> */}
        <td>{Car.make}</td>
        <td>{Car.model}</td>
        <td>{Car.price}</td>
      </tr>
    ))}
  </tbody>
            </table>
          </div>
        </div>
        : <div className=" text-light">No Car in the List</div>
    }
  </div>
}

export default Car;