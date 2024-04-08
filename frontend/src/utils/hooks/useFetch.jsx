import { useState, useEffect } from 'react'

export function useFetch(url) {
  const [data, setData] = useState(null);

  function getData(url) {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
      .then((data) => data.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log('error')
      })
  }

  useEffect(() => {
    getData(url);
  }, [url])

  return data;
}
