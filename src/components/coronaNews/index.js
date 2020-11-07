import React, { useEffect, useState } from 'react';
import app from '../../services/firebase';
import 'firebase/database';
import moment from 'moment';

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
    const db = app.database().ref('news');
    db.on('value', (snapshot) => {
      const firebaseNews = snapshot.val();
      setNews(firebaseNews.data);
      setIsLoading(false);
    });
  }, []);

  console.log(visible);

  return (
    <div className="bg-gray-300 rounded-lg shadow-xl px-4 py-6 mx-24 mb-24">
      <h2 className="text-green-900 text-xl font-medium">Berita Terbaru</h2>
      <div className="border-t pt-2 mt-2 border-green-600 text-center"></div>
      {isLoading ? (
        <p>loading</p>
      ) : (
        <div className="flex-col">
          {news.slice(0, visible).map((data, index) => {
            return (
              <div className="title pt-2 pb-4 px-4">
                <h3
                  key={index}
                  className="font-light text-white bg-yellow-500 mb-2 py-1 px-2 rounded "
                >
                  {moment(data.date).format('LLL')}
                </h3>
                <ul
                  key={index}
                  className="text-green-800 px-4 pl-12 pb-2 list-disc"
                >
                  {data.activity.map((data1) => {
                    return (
                      <li key={index} className="">
                        <a
                          target="_blank"
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
