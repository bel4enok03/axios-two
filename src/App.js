import axios from 'axios';
import { Component } from 'react';
import './App.css';

class App extends Component {
  state ={
    posts:[]
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res => {
      const posts = res.data;
      this.setState({posts})
      console.log(posts)
    }))
  }

  render(){
    return(
      <div>
        {this.state.posts.map(post =>
          <p key={post.id}>{post.title}
          <br></br>
          <span className='title'> { post.body}</span></p>)}
      </div>
    )
  }
}

export default App;
