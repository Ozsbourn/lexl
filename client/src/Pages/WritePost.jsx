import React, { useState, useMemo, useRef }          from "react";
import ReactQuill                   from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios                        from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment                       from "moment";

import Test from "./Map";



const WritePost = () => {
  const state             = useLocation().state;
  const [value, setValue] = useState(state?.desc  || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file,  setFile]  = useState(null);
  const [cat,   setCat]   = useState(state?.cat   || "");

  const navigate = useNavigate()

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("http://localhost:8800/api/upload", formData, {
        withCredentials: true
      });

      return res.data;
    } catch (err) {
      alert(err);
      console.log(err);

      return null;
    }
  };

  const saveToServer = async (img) => {
    try {
      const formData = new FormData();
      formData.append("file", img);
      const res = await axios.post("http://localhost:8800/api/upload", formData, {
        withCredentials: true
      });

      if (res.status === 200) {
        //alert(res.data);
        insertToEditor(res.data);
      }
    } catch (err) {
      alert(err);
      console.log(err);

      return null;
    }
  };

  let quillObj;
  function insertToEditor(url) {
    // editorRef.insertEmbed(null, "image", url);
    quillObj.getEditor().insertEmbed(null, 'image', url); 
  }

  const imageHandler = async () => {
    const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        input.onchange = () => {
            const file = input.files[0];

            // file type is only image.
            if (/^image\//.test(file.type)) {
                saveToServer(file);
            } else {
                console.warn("Вы можете загружать только изображения!");
            }
        };
  };

  

  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl = await upload();

    if (value.length > 10000) {
      alert("Объём статьи слишком большой!");

      return null;
    }

    if (imgUrl === 'http://localhost:8800/api/upload/') {
      imgUrl = 'http://imageipsum.com/1200x675';
    } 

    try {
      state
        ? await axios.put(`http://localhost:8800/api/posts/${state.id}`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "-1",
          }, {
            withCredentials: true
          }).then((res) => {
            navigate("/")
          })
          .catch((err) => {
            alert(err.response.data);
          })
        : await axios.post(`http://localhost:8800/api/posts/`, { 
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "-1",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          }, {
            withCredentials: true
          })
          .then((res) => {
            navigate("/")
          })
          .catch((err) => {
            alert(err.response.data);
          });
    } catch (err) {
      console.log(err);
    }
  };

  const editorRef = useRef(null);
  const modules   = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
      ],
      // handlers: {
      //   image: imageHandler
      // }
    }
  }), [])

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Укажите заголовок статьи"
          maxLength={255}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            modules={ modules }
            formats={
              {
                formats: [
                  'header',
                  'bold', 'italic', 'underline', 'strike', 'blockquote',
                  'list', 'bullet', 'indent',
                  'link', 'image'
                ],
              }
            }
            value={value}
            maxLength={10000}
            onChange={setValue}
            id={ editorRef }
            ref={(el) => {  
              quillObj = el;  
            }}  
          /> 
        </div>

        <div className="maphandler">
          <Test>

          </Test>
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Опубликовать</h1>
          <span>
            <b>Статус: </b>Черновик
          </span>
          <span>
            <b>Видимость: </b>Доступно только Вам. После публикации станет общедоступной
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            accept="image/png, image/jpeg, image/webp"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          <label className="file" htmlFor="file">
            Загрузить превью-изображение статьи
          </label>
          
          <div className="buttons">
            <button>Сохранить черновик</button>
            <button onClick={handleClick}>Опубликовать</button>
          </div>
        </div>
        <div className="item">
          <h1>Категория</h1>

          <div className="cat">
            <input
              type="radio"
              checked={cat === "traveling"}
              name="cat"
              value="traveling"
              id="traveling"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="traveling">Путешествия</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "culture"}
              name="cat"
              value="culture"
              id="culture"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="culture">Культура</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "culture"}
              name="cat"
              value="culture"
              id="culture"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="culture">Достопримечательности</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "culture"}
              name="cat"
              value="culture"
              id="culture"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="culture">Языки</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "culture"}
              name="cat"
              value="culture"
              id="culture"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="culture">Языки</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "events"}
              name="cat"
              value="events"
              id="culture"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="culture">События</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "culture"}
              name="cat"
              value="events"
              id="culture"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="culture">Дневник</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "culture"}
              name="cat"
              value="events"
              id="culture"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="culture">Маршруты</label>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default WritePost;