import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


/* class Photowall extends Component {

render() {

  return <div className="photo-grid"> {this.props.posts.map((post,index)=><Photo key={index} post={post}/>)} </div>
}

/* <button className="addIcon" onClick={props.onAdd}></button>

npm install --save prop-types@15.5.7

} */

function Photowall(props) {
  return <div>
    <Link to='/AddPhoto' className="addIcon"> </Link>
  <div className="photo-grid"> {props.posts.sort((x,y)=>x.id-y.id)
      .map((post,index)=><Photo key={index} post={post} {...props} index={index}/>)} </div> </div>
}


export default Photowall
