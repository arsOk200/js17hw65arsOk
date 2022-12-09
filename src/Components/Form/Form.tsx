import React, {useState} from 'react';
import {ApiPage, PageMutation} from "../../type";



interface Props {
  getPage:(name:string) => void;
  onSubmit:(page:ApiPage) => void;
  pages?:PageMutation;
}

const initialState:PageMutation = {
  title:'',
  content:'',
}
const Form:React.FC<Props> = ({getPage, onSubmit,pages=initialState}) => {
  const [page, setPage] = useState<PageMutation>(initialState);

  const getPageFromSelect = (e:React.ChangeEvent<HTMLSelectElement>) => {
    getPage(e.target.value.toLowerCase());
  }

  const onPageChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setPage(prev => ({...prev, [name]: value}));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...page,
    });
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
      <h4>Edit</h4>
      <div className="form-group">
        <label htmlFor="page">Page</label>
        <select name="page" id="page" onChange={getPageFromSelect}>
          <option disabled value=''>Select a page:</option>
          <option>home</option>
          <option>contacts</option>
          <option>about</option>
          <option>divisions</option>
          <option>history</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="title">title</label>
        <input
          id="title" name="title" type="text"
          className="form-control"
          value={page.title}
          onChange={onPageChange}
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="content">Content</label>
        <textarea
          id="content" name="content"
          className="form-control"
          value={page.content}
          onChange={onPageChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Save</button>
    </form>

    </div>
  );
};

export default Form;