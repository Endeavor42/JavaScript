import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import Pokeball from '../pokeball.png'

class Home extends Component {
  state = {
    posts: [ ]
  };
  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon").then(res => {
      this.setState({
        posts: res.data.results
      });
    });
  }
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
          console.log(post);
          let capLetter = post.name.charAt(0).toUpperCase() + post.name.slice(1) // cap for letter
        return (
          <div className="post card" key={post.id}>
              <img src={Pokeball} alt="A pokeball"/>
            <div className="card-content">
                <Link to ={`/${post.id}`} > {/*make title become a link */}
              <span className="card-title red-text">{capLetter}</span>
              </Link>
              <p>{post.url}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts yet</div>
    );
    return (
      <div>
        <div className="container home">
          <h4 className="center">Home</h4>
          {postList}
        </div>
      </div>
    );
  }
}

export default Home;
