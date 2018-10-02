import React from 'react';
import ReactDOM from 'react-dom';


class Results extends React.Component {
  constructor(props)
  {
      super(props);
      this.state = {show: false};
      this.showClick = this.showClick.bind(this);
    }

  showClick(e){
    this.setState(prevState => ({show: !prevState.show}));
  }



  render(){
    return(
  <div className = "result">
      <div className = "result1">
        <div className = "head">
          <div className = "title"><h5>Press Release</h5></div>
          <div className = "name">GODREJ</div>
          <div className = "date"><h6>03-May-2016</h6></div>
        </div>
        <div  ClassName="maintext" >
        <ul >
          <li className ="ulist"><p>Performance Highlights 4Q FY 2016 India net sales increased by 7% to INR 1,208 crore 4Q FY 2016 EBITDA increased by 15% to ...INR 211 crore category Review.
          Household Insecticides continues to deliver double digit growth, with a sales growth of 10%. </p>
          </li>
          <li className ="ulist">
            <p>Performance Update 4Q FY 2016 may 3,2016 SALES GROWTH LED BY VOLUMES India Business Sales</p>
          </li>
          {
            this.state.show?
            <div>
            <li className ="ulist"><p>Rs 1,089 m during Q1 FY2017 sales growth was 22.2%. Lupin Brazil sales grew</p></li>
            <li className ="ulist"><p>to Operational Highlights, Page4) US formulation sales increased by 69.8% to USD 292m, during Q2 FY2017</p></li>
            </div>
            :null
          }
        </ul>


        <button style ={{marginLeft:'920px'}} className ="toggle" onClick={this.showClick}>
        {this.state.show ? 'Show Less' : 'Show More'}
        </button>

        </div>
        </div>


        <div className = "head">
          <div className = "title"><h5>Press Release</h5></div>
          <div className = "name">GODREJ</div>
          <div className = "date"><h6>03-May-2016</h6></div>
        </div>
        <div  ClassName="maintext" >
        <ul >
          <li className ="ulist"><p>Performance Highlights 4Q FY 2016 India net sales increased by 7% to INR 1,208 crore 4Q FY 2016 EBITDA increased by 15% to ...INR 211 crore category Review.
          Household Insecticides continues to deliver double digit growth, with a sales growth of 10%. </p>
          </li>
          <li className ="ulist">
            <p>Performance Update 4Q FY 2016 may 3,2016 SALES GROWTH LED BY VOLUMES India Business Sales</p>
          </li>
          {
            this.state.show?
            <div>
            <li className ="ulist"><p>Rs 1,089 m during Q1 FY2017 sales growth was 22.2%. Lupin Brazil sales grew</p></li>
            <li className ="ulist"><p>to Operational Highlights, Page4) US formulation sales increased by 69.8% to USD 292m, during Q2 FY2017</p></li>
            </div>
            :null
          }
        </ul>


        <button style ={{marginLeft:'920px'}} className ="toggle" onClick={this.showClick}>
        {this.state.show ? 'Show Less' : 'Show More'}
        </button>

        </div>
        </div>

    );
  }
}



export default Results;
