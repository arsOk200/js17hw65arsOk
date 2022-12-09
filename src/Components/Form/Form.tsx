import React from 'react';

const Form = () => {
  return (
    <div> <form>
      <h4>Edit</h4>
      <div className="form-group">
        <label htmlFor="page">Page</label>
        <select name="page" id="page">
          <option disabled value=''>Select a page:</option>
          <option value="">Home</option>
          <option value="">Contacts</option>
          <option value="">About</option>
          <option value="">Divisions</option>
          <option value="">History</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="title">title</label>
        <input
          id="title" name="title" type="text"
          className="form-control"

        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="content">Content</label>
        <textarea
          id="content" name="content"
          className="form-control"

        />
      </div>
      <button type="submit" className="btn btn-primary">
        Save</button>
    </form>

    </div>
  );
};

export default Form;