import {useEffect,useState} from 'react';

function useCurrencyInfo(currentFrom)
{
  const [data,setData] =useState({});
  useEffect(()=> {

    fetch(`https://2024-03-06.currency-api.pages.dev/v1/currencies/${currentFrom}.json`)
    .then((res)=>(res.json()))
    .then((res)=>(setData(res[currentFrom])))
  },[currentFrom]);
  console.log(data);
  

  return data;




}
export default useCurrencyInfo;