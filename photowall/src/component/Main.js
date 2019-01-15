import React, {Component} from 'react';
import Title from './Title';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto';
import Single from './Single'
import {Route,Link} from 'react-router-dom';
import {connect} from 'react-redux';
import  * as action from '../redux/actions';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';

class Main extends Component {

   constructor() {
   super()
   }

   componentDidMount() {
     this.props.startLoadingPosts()
   }

   render() {
     console.log(this.props)
     return  (
       <div>
        <h1>
          <Link to="/"> Photowall  </Link>
        </h1>
     <Route exact path="/"
     render = {()=>(<div>
                          <Photowall {...this.props}/>
 </div>)} />

     <Route path="/addPhoto" render = {({history}) => (
         <AddPhoto {...this.props}  onHistory={history}/>
       )} />

     <Route path="/single/:id" render= {(params)=>(
        <Single {...this.props} {...params} />
       )} />

</div>)
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments:state.comments
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(action,dispatch)
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main))
