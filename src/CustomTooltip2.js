import React from 'react';

import PropTypes from 'prop-types';

//custom tooltip for number of operations pie chart 
class CustomTooltip2 extends React.Component {

  propTypes = {
    type: PropTypes.string,
    payload: PropTypes.array
  };


  render () {    
      const { active } = this.props;

      if (active) {
        const { payload } = this.props;
        return (
          <div id="custom-tooltip2">
            
          <strong>Times: </strong> 
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          {payload[0].value}        
          </div>

        );
      }

      return null;
  }


}

export default CustomTooltip2;