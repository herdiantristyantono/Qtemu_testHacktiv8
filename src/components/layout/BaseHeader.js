import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BaseHeader extends Component {
  render() {
    const {head0, head1, head2, head3}=this.props;
    return (
      <ul className="nav fixed-top justify-content-between text-white-50 py-3 px-2">
        <li className="nav-item text-white font-weight-bold mr-5 ml-2">{head0}</li>
        <li className="nav-item mr-5"><a href="#" className="text-white">{head1}</a></li>
        <li className="nav-item"><a href="#" className="text-white">{head2}</a></li>
        <li className="nav-item flex-grow-1 text-right mr-2"><Link to="/login" className="text-white">{head3}</Link></li>
        
      </ul>
    );
  }
}

export default BaseHeader;
