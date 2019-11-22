import React, { Component } from 'react';
import api from '../../services/api';
import Nav from '../../components/Nav/index';
import './style.css';

class Form extends Component {
  state = {
    title: '',
    content: ''
  };

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleContentChange = (e) => {
    this.setState({ content: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const response = api.post('/notes', this.state.title, this.state.content);
    console.log(response);
  };

  render() {
    return (
      <>
      <Nav/>
      <div className="content-wrapper">
        <form onSubmit={this.handleSubmit}>
          <div className="main-form">
            <div className="title-box">
              <label htmlFor="title-input">Title</label>
              <input onChange={this.handleTitleChange} value={this.state.title} id="title-input" name="title-input" type="text" autoComplete="off"/>
            </div>
            <div className="content-box">
              <label htmlFor="content-input">Content</label>
              <textarea onChange={this.handleContentChange} value={this.state.content} name="content-input" id="content-input"></textarea>
            </div>
            <div className="button-box">
              <button className="save-button">Save</button>
            </div>
          </div>
        </form>
      </div>  
      </>
    )
  }
};

export default Form;