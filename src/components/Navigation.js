import React from 'react';


class Navigation extends React.Component {
  render(){
    return(
      <nav className="navbar navbar-expand-lg  ">
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>

         <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <form className="form-inline my-2 my-lg-0">
           <input className="searchbar1 mr-sm-3 " type="search" placeholder="search" aria-label="Search" />
           <input className="searchbar mr-sm-2" type="search" placeholder="Ticket or Company" aria-label="Search" />
           <button className="btn btn-default my-2 my-sm-0" type="submit">Submit</button>
         </form>
         </div>

         <ul className="nav navbar-nav navbar-right">
            <button className = "upload">Upload</button>
         </ul>
        </nav>
    );
  }
}

export default Navigation;
