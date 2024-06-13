import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Main.css";
import storage from "../../firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { useNavigate, Link} from "react-router-dom";

export const Main = () => {
  const [allGoods, setAllGoods] = useState([]);
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    (async () => {
      const goodsList = await axios("/api/goods").then((res) => res.data);
      setAllGoods(goodsList);
      const urls = await Promise.all(
        goodsList.map(async (obj) => {
          const gsReference = ref(
            storage,
            `gs://image-uploder-2e9ff.appspot.com/image/${obj.image}`
          );
          try {
            const url = await getDownloadURL(gsReference);
            return url;
          } catch (error) {
            console.log(error);
            return null;
          }
        })
      );
      setUrls(urls);
    })();
  }, []);

  return (
    <>
      <div className="goodsPage">
        {allGoods.map((obj, index) => (
          <div className="goods" key={index}>
            {urls[index] && (
              <img className="image" src={urls[index]} alt={`Image ${index}`} />
            )}
            {obj.name}
            <br />
            {`￥${obj.price}`}
            <Link to={"item"} state={{obj: obj,url: urls[index]}}>詳細</Link>
          </div>
        ))}
      </div>
    </>
  );
};
