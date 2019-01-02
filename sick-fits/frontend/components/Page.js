import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';

export default class Page extends Component {
  render () {
    return (
      <Fragment>
        <Meta />
        <Header />
        {this.props.children}
      </Fragment>
    );
  }
}
