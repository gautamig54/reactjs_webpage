import React from 'react';

class Sidemenu extends React.Component {
  render(){
    return (
        <div className = "sidebar-nav">
          <div style={{textAlign:'center'}} class="slidecontainer">
            <p >Keywords Proximity</p>
            <input type="range" min="1" max="50" value="25" />
          </div>

          <br></br>
          <br></br>

          <p>Market Cap</p>
          <label class="checkboxes">Large cap(above Rs 20,000 cr)
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <br></br>
          <label class="checkboxes">Middle cap(Rs 5,000 - 20,000 cr)
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <br></br>
          <label class="checkboxes">Small cap(Rs 1,000 - 5,000 cr)
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <br></br>
          <label class="checkboxes">Micro cap(below Rs 1,000 cr)
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>

          <br></br>
          <p>Time Frame</p>

          <label class="checkboxes">Last 7 days
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="checkboxes" style={{marginLeft: '150px', marginTop:'-40px'}}>Last 30 days
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <br></br>
          <label class="checkboxes">Last Month
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <label class="checkboxes" style={{marginLeft: '150px', marginTop:'-40px'}}>Last 3 months
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <br></br>
          <label class="checkboxes">Last 6 months
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <label class="checkboxes" style={{marginLeft: '150px', marginTop:'-40px'}}>Last year
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>



          </div>

    );
  }
}

export default Sidemenu;
