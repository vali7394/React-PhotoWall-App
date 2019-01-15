import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
/* class Photo extends Component {

render() {
  const post = this.props.post;
  return <figure className="figure">
        <img src={post.imageLink} alt={post.description} />
        <figcaption> <p>{post.description} </p>  </figcaption>
        <div className="button-container"> <button> Remove </button> </div>
        </figure>
}

} */


function Photo(props) {
  const post = props.post;
  return <figure className="figure">
         <Link to={`/single/${post.id}`}><img src={post.imageLink} alt={post.description} /></Link>
        <figcaption> <p>{post.description} </p>  </figcaption>
        <div className="button-container"> <button
        onClick = { () => {
        //  console.log(props.index)
          props.startRemovingPosts(props.index,post.id)
          props.history.push("/")
        }}> Remove </button> </div>
      <Link to={`/single/${post.id}`} className='button' >
          <div className='comment-count'>
            {props.comments[post.id] ? props.comments[post.id].length:0}
          </div>
      </Link>
        </figure>

}


export default Photo
