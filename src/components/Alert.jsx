import React from 'react'

const Alert = (props) => {


    const capitalize = (str) => {
        let l = str.toLowerCase();
        return l.charAt(0).toUpperCase() + l.slice(1);
    }

  return (
    <div style={{height:'40px' }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong> :{" "}
          {props.alert.message}
        </div>
      )}
    </div>
  );
}

export default Alert

    
// 'alert alert-danger alert-dismissible fade show'