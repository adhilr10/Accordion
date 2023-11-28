import { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/posts/1/comments";

const getAccordionData = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(API_URL);
      const resData = await res.json();
      setData(resData);
    };
    getData();
  }, []);
  return data;
};

export default getAccordionData;
