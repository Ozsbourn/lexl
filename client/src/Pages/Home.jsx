import React, { useState, 
                useEffect }           from 'react'
import { Link, 
         useLocation }                from 'react-router-dom';
import axios                          from 'axios';



const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html");
    let str   = doc.body.textContent.substring(0, 300);

    // trim by ending of word if before trimming return trim in middle of word
    return str.substring(0, Math.min(str.length, str.lastIndexOf(" ")));
  }

  return (
    <div className='home'>
        <div className='posts'>
          {posts.map((post) =>(
            <div className='post' key={post.id}>
              <div className='img'>
                <Link className='link' to={`/post/${post.id}`}>
                  <img src={`${(post.img == "-1") ? 'http://imageipsum.com/1200x675': post.img}`} alt="" />
                </Link>
              </div>

              <div className='content'>
                <Link className='link' to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                </Link>
                
                <p style={{textOverflow: 'elipsis'}}>{getText(post.desc)}</p>
                
                <Link className='link' to={`/post/${post.id}`}>
                  <button>Читать далее...</button>
                </Link>
              </div>
            </div>
          ))}
        </div>  
    </div>
  )
}

export default Home