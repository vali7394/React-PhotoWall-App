import React, {Component} from 'react';


class AddPhoto extends Component {

constructor() {
  super()
  this.handleSumbit = this.handleSumbit.bind(this)
}

handleSumbit(event) {
  event.preventDefault();
  const imageLink = event.target.elements.link.value
  const description = event.target.elements.description.value
  const post = {
    "id":Number(new Date()),
    "description":description,
    "imageLink":imageLink
  }

  if(description && imageLink) {
    this.props.startAddingPost(post)
    this.props.onHistory.push('/')
  }

}


 render() {
   return (

    <div>
    <div className="for-form">
   <form onSubmit={this.handleSumbit}>
   <input type="text" placeholder="link" name="link"/>
   <input type="text" placeholder="description" name="description"/>
   <button> Post </button>
   </form>
   </div>


    </div>



   )
 }


}

export default AddPhoto
