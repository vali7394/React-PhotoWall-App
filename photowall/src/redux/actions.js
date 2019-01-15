
import {database} from '../database/config'

export function startAddingPost(post) {

return (dispatch) => {
  return database.ref('posts').update({[post.id]:post}).then(()=> {
    dispatch(addPost(post))
  }).catch((error)=>{
    console.log(error)
  })
}


}

export function startLoadingPosts() {
  return (dispatch) => {

    return database.ref('posts').once('value').then((snapshot)=>{
      let posts = []
      snapshot.forEach((childSnapshot)=>{
        posts.push(childSnapshot.val())
      })
      dispatch(loadPosts(posts))
    }).catch((error)=>{
      console.log(error)
    })

  }
}


export function startRemovingPosts(index,id) {

  return (dispatch)=>{
    return database.ref(`posts/${id}`).remove().then(()=>{
      dispatch(removePost(index))
    }).catch((error)=>{
      console.log(error)
    })
  }

}


export function startAddingComments(comment,id) {

  return (dispatch)=>{

    return database.ref('comments/'+id).push(comment).then(()=>{
      dispatch(addComment(comment,id))
    }).catch((error)=>{
      console.log(error)
    })


  }


}


export function startLoadingComments(postId) {

 return (dispatch) => {

   return database.ref('comments').on('value').then((snapshot)=>{
     let comments = {}
     snapshot.forEach((childSnapshot)=>{
       comments[childSnapshot.key] = Object.values([childSnapshot.val()])
     })
   })


 }


}

export function removePost(index) {
  return {
    type: "REMOVE_POST",
    index: index
  }
}

export function addPost(post) {

  return {
    type:"ADD_POST",
    post
  }

}

export function addComment(comment,postId) {

  return {

    type: "ADD_COMMENT",
    comment,
    postId
  }

}


export function loadPosts(posts) {

  return {

   type : 'LOAD_POSTS',
   posts

  }


}
