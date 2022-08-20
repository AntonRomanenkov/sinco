import React,{Fragment} from 'react';
import { CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgress = (props) => {
    
  return (
    <Fragment>
        <CircularProgressbar
        className="percent-inner"
        value={props.number}
        text={`${props.number}%`}
      />
    </Fragment>
  )
}

export default CircularProgress