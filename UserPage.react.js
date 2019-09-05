import React from 'react';

import './UserPage.css';

class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            action:"results"            
        }
    }

    render() {
        if(this.state.action==="results"){
        return (
            this.props.userList.map((eachUser)=>{
                return(
            <div className='userpage_wrapper'>
                <table id="user">
                    <tr>
                        <th>User Id</th>
                        <th>User Name</th>
                        
                    </tr>
                    <tr>
                        <td>{eachUser.usersId}</td>
                        <td>{eachUser.usersName}</td>
                        
                    </tr>
                </table>
            </div>
        );
    })
    );
    }

    
}
}

export default UserPage;