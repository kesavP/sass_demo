import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
    // console.log("nedkl ",props);
return(
    <div>
        {props.btnFamily.map(counter =>
        <button onClick={() => props.btnClickActionUsersPage(counter)} key={counter.id}>
        {counter.subscribed ? "subscribe" : "unsubscribe"}
        </button>
        )}
    </div>
)
}

 class Buttonclick extends React.Component{

     render(){
        //  console.log(this.props);
         return(
             <div>
                 <h1>please click here</h1>
                 <Button
                 btnClickActionUsersPage = {this.props.btnClickActionUsersPage}
                 btnFamily = {this.props.buttonFamily}
                 >
                 </Button>
             </div>
         );
     }
 }

  Buttonclick.propTypes = {
    btnClickActionUsersPage: PropTypes.func.isRequired
}

export default Buttonclick;