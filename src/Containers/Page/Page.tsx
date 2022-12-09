import React, {useCallback, useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import AxiosApi from "../../axiosApi";
import {PageType} from "../../type";
import PageInfo from "../../Components/Page-Info/PageInfo";
import Spinner from "../../Components/Spinner/Spinner";


const Page = () => {
  const {PageName} = useParams();
  const location = useLocation();

  const [page, setPage] = useState<PageType[]>([]);
  const [loading, setLoading] = useState(false);

  let url = '/pages/home.json';
  if (location.pathname !== '/') {
    url = `/pages/${PageName}.json`;
  }


  const pageFetch = useCallback(async () => {
    try {
      setLoading(true);
      const pageResponse = await AxiosApi.get(url);
      const pages = pageResponse.data;

      if (!pages) {
        setPage([]);
        return
      }

      setPage([pages]);
    } finally {
      setLoading(false);
    }
  }, [PageName]);


  useEffect(() => {
    void pageFetch();
  }, [pageFetch, PageName]);


  return (<div className='container'>

      {loading ? <Spinner/> : (page.map((pages) => (
          <PageInfo title={pages.title} content={pages.content} key={Math.random().toString()}/>)))}
    </div>);
};

export default Page;