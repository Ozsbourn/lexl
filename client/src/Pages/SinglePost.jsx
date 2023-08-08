import React, { useEffect, useState }     from "react";
import Edit                               from "../Assets/img/edit.png";
import Delete                             from "../Assets/img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu                               from "../Components/Menu";
import axios                              from "axios";
import moment                             from "moment";
import { useContext }                     from "react";
import { AuthContext }                    from "../Context/authContext";
//import { Test }                           from "./Map.jsx"
import DOMPurify                          from "dompurify";

const SinglePost = () => {
    const [post, setPost] = useState({});
  
    const location = useLocation();
    const navigate = useNavigate();
  
    const postId = location.pathname.split("/")[2];
  
    const { currentUser } = useContext(AuthContext);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`http://localhost:8800/api/posts/${postId}`);
          setPost(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }, [postId]);
  
    const handleDelete = async () => {
      try {
        await axios.delete(`http://localhost:8800/api/posts/${postId}`,  {
          withCredentials: true
        });

        navigate("/")
      } catch (err) {
        console.log(err);
      }
    }
  
    const getText = (html) =>{
      const doc = new DOMParser().parseFromString(html, "text/html")
      return doc.body.textContent
    }
  
    return (
      <div className="single">
        <div className="content">
          {/* <img src={`${post?.img}`} alt="" /> */}
          <img src={`${(post.img == "-1") ? 'http://imageipsum.com/1200x675': post.img}`} alt="" />
          
          <div className="user">
            {post.userImg && <img
              src={post.userImg}
              alt=""
            />}
            <div className="info">
              <span>{post.username}</span>
              <p>Posted {moment(post.date).fromNow()}</p>
            </div>
            {currentUser?.username === post.username && (
              <div className="edit">
                <Link to={`/writepost?edit=2`} state={post}>
                  <img src={Edit} alt="" />
                </Link>
                <img onClick={handleDelete} src={Delete} alt="" />
              </div>
            )}
          </div>

          <h1>{post.title}</h1>
          <p
            dangerouslySetInnerHTML={{
             __html: DOMPurify.sanitize(post.desc),
            }}
          ></p>

          {/* <Test>

          </Test> */}
        </div>
        <Menu cat={post.cat}/>
      </div>
    );
  };

export default SinglePost