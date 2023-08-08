import axios               from "axios";
import React, { 
                useEffect, 
                useState } from "react";
import { Link }            from "react-router-dom";

const Menu = ({cat}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="menu">
      <h1>Вам также может понравиться:</h1>
      {posts.slice(0, 4).map((post) => (
        <div className="post" key={post.id}>
          {/* <img src={`../upload/${post?.img}`} alt="" /> */}
          
          <Link className='link' to={`/post/${post.id}`}>
            <img src={`${post?.img}`} alt="" />
            <h2>{post.title}</h2>
            <button>Читать далее...</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;