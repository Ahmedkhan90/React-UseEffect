
import './App.css';
import axios from 'axios';
import react from "react";
import React, {useState} from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [click, setClick] = useState([]);
  console.log("I Am Running")
  React.useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`)
      .then(res => {
        const newPosts = res.data.data.children
          .map(obj => obj.data);
  
        setPosts(newPosts);
      });
  }, [click]);
  return (
    <div>
 <h1>/r/reactjs</h1>
  <button onClick={()=>setClick(click)}>Reload</button>
<h1>Queue Link</h1>
  <h3>https://www.youtube.com/watch?v=8aGhZQkoFbQ</h3>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
