import React, { Component } from "react";
class DisplayMessage extends React.Component {

  componentDidMount() {
    setTimeout(this.props.stopEditing,1000);
  }

  render() {
      console.log(this.props);
    return( 
    <div>
        <div className='msgTrue'>{this.props.propKey}</div>
        <br></br>
        <pre className="tab">Saved Successfully</pre>
    </div>
    )
  }
}

export default DisplayMessage;
