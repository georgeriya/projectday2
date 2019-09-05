import React from 'react';

import './DriversPage.css';
import axios from 'axios';

class DriversPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            action:"results"            
        }
    }
    onClickRemove=()=>{
            this.setState({action:"remove"});
        }
    onClickAdd=()=>{
            this.setState({action:"add"});
        }
    onClickUpdate=()=>{
            this.setState({action:"update"});
        }


    render() {
        if(this.state.action==="results"){
        return (
            this.props.driverList.map((eachDriver)=>{
                return(
            <div className='driverspage_wrapper'>
                <div>
                <table id="driver">
                    <tr>
                        <th>Driver Id</th>
                        <th>Driver Name</th>
                        {/* <th>Remove</th> */}
                    </tr>
                    <tr>
                        <td>{eachDriver.driverId}</td>
                        <td>{eachDriver.driverName}</td>
                        {/* <td><button>Remove</button></td> */}
                    </tr>
                </table>
                </div>
                <div>
                {/* <button onClick={this.onClickRemove}>Remove</button> 
                <button onClick={this.onClickAdd}>Add</button>
                <button onClick={this.onClickUpdate}>Update</button>         */}
            </div>
            </div>

        );
        this.state.action="actions"
    }
   // this.state.action="actions"
    )
    );

    
    }
    else if(this.state.action="actions"){
        return(
            <div>
                <button onClick={this.onClickRemove}>Remove</button> 
                <button onClick={this.onClickAdd}>Add</button>
                <button onClick={this.onClickUpdate}>Update</button>        
            </div>
        );
    }
    
}
}
export default DriversPage;