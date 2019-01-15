import React, {Component} from 'react';


class Comments extends Component {

constructor() {
super()
this.handleSumbit = this.handleSumbit.bind(this)
}

handleSumbit(event) {
  event.preventDefault()
  const comment = event.target.elements.comment.value
  this.props.startAddingComments(comment,this.props.id)
  event.target.elements.comment.value=''
}


render() {
console.log(this.props.comments)
return <div>

{

          this.props.comments.map((comment,index) => {
              return (<p key={index}>{comment} </p> )
          })


        }

      <form className='for-form' onSubmit={this.handleSumbit}>

        <input type='text' placeholder="comment" name="comment" />
        <input type="submit" hidden/>


      </form>


      </div>


}


}

export default Comments
