import React, { Component } from "react";
import axios from "axios";

export default class Post extends Component {
  state = {
    post: null,
    imgUrl: ""
  };

  componentDidMount() {
    let id = this.props.match.params.post_id;
    axios.get("https://jsonplaceholder.typicode.com/posts/" + id).then(res => {
      this.setState({
        post: res.data
      });
    });
    const imgUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${id}.png?raw=true`;
    this.setState({
      imgUrl: imgUrl
    });
  }

  render() {
    const post = this.state.post ? (
      <div className="post">
        <h4 className="center">{this.state.post.title}</h4>
        <sprite src={this.state.post.imgUrl}/>
        <p>{this.state.post.body}</p>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return (
      <div>
        <div className="container">{post}</div>
      </div>
    );
  }
}
