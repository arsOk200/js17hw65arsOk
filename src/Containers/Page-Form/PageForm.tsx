import React, {useEffect, useState} from 'react';
import Form from "../../Components/Form/Form";
import axiosApi from "../../axiosApi";
import {ApiPage} from "../../type";
import {useNavigate} from "react-router-dom";

const PageForm = () => {

  const [page, setPage] = useState<ApiPage | null>(null);

  const navigate = useNavigate();


  let pageName:string = '';

  const fetchOnePage = async (name:string) => {
    try {
      const onePageResponse = await axiosApi.get(`/pages/${name}.json`);
      const pages = onePageResponse.data;
      setPage(pages);
      pageName = name;
    } finally {

    }
  };

  useEffect(()=> {
    void fetchOnePage;
  }, [fetchOnePage]);

  const updatePage =  async (page:ApiPage) => {
    await axiosApi.put(`/pages/${pageName}.json`, page);
    navigate(`/pages/${pageName}`);
  };

  return (

    <div className='container'>

        <Form getPage={fetchOnePage} onSubmit={updatePage}  pages={page}/>

    </div>
  );
};

export default PageForm;