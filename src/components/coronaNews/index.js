import React, { useEffect, useState } from "react";
import app from "services/firebase";
import "firebase/database";
import moment from "moment";
import { Link } from "react-router-dom";

const CoronaNews = () => {
  const [news, setNews] = useState([]);
  const [visible, setVisible] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  const showMore = () => {
    if (visible >= 55) {
      setVisible((prevValue) => prevValue - 46);
    } else {
      setVisible((prevValue) => prevValue + 46);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const db = app.database().ref("news");
    db.on("value", (snapshot) => {
      const firebaseNews = snapshot.val();
      setNews(firebaseNews.data);
      setIsLoading(false);
    });
  }, []);

  console.log(news);

  return (
    <div className="bg-gray-300 rounded-lg shadow-xl px-4 py-6 mx-24 mb-24">
      <h2 className="text-green-900 text-xl font-medium">Berita Terbaru</h2>
      <select
        className="text-sm font-medium bg-green-700 text-white"
        defaultValue="Sort"
      >
        <option value="Sort">Sort</option>
        <option value="Newest">Newest</option>
        <option value="Oldest">Oldest</option>
      </select>
      <div className="border-t pt-2 mt-2 border-green-600 text-center"></div>
      {isLoading ? (
        <p className="text-2xl text-green-600 mx-auto font-semibold text-center pt-8">
          Loading...
        </p>
      ) : (
        <div className="flex-col">
          {news
            .reverse()
            .slice(0, visible)
            .map((data) => {
              return (
                <div className="title pt-2 pb-4 px-4">
                  <h3
                    key={data}
                    className="font-light text-white bg-yellow-500 mb-2 py-1 px-2 rounded "
                  >
                    <Link to={`/infoCorona/${data.date}`}>
                      {moment(data.date).format("LLL")}
                    </Link>
                  </h3>
                  <ul
                    key={data}
                    className="text-green-800 px-4 pl-12 pb-2 list-disc"
                  >
                    {data.activity.map((data1) => {
                      return (
                        <li key={data} className="">
                          <a
                            ref="noreferrer noopener"
                            href={data1.url}
                            className="hover:underline font-semibold"
                          >
                            {data1.title}
                          </a>
                          <p className="text-sm text-justify pb-2">
                            {data1.desc}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
        </div>
      )}
      <button
        onClick={showMore}
        className="bg-green-600 text-white hover:bg-white hover:text-green-600 font-bold py-2 px-4 my-6 border-b-4 border-green-900 hover:border-green-700 rounded"
      >
        <span>
          {visible >= 55 ? <p>Sembunyikan Lagi</p> : <p>Tampilkan Semua</p>}
        </span>
      </button>
    </div>
  );
};

export default CoronaNews;
