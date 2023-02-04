import React from 'react'

const Alert = (props) => {


    const capitalize = (str) => {
        let l = str.toLowerCase();
        return l.charAt(0).toUpperCase() + l.slice(1);
    }

  return (
    props.alert && <div className= {`alert alert-${props.alert.type} alert-dismissible fade show`} role='alert'>
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.message}
    </div>
  )
}

export default Alert

    
// 'alert alert-danger alert-dismissible fade show'