import * as React from 'react';
import { Circle } from 'rc-progress';

const Example = () => {
  const circleContainerStyle = {
    width: '250px',
    height: '250px',
    display: 'inline-block',
  };

  return (
    <div>
      <h3>Circle Progress {90}%</h3>
      <div style={circleContainerStyle}>
        <Circle
          percent={90}
          strokeWidth={6}
          strokeLinecap="round"
          strokeColor={{
            '0%': '#108ee9',
            '100%': '#87d068',
          }}
        />
      </div>
      <h3>Circle Progress {100}%</h3>
      <div style={circleContainerStyle}>
        <Circle
          percent={100}
          strokeWidth={6}
          strokeLinecap="round"
          strokeColor={{
            '100%': '#108ee9',
            '0%': '#87d068',
          }}
        />
      </div>

      <h3>Circle colors</h3>
      <div style={circleContainerStyle}>
        <Circle
          percent={90}
          strokeWidth={6}
          strokeColor={{
            '0%': 'green',
            '99%': 'red',
            '100%': 'blue',
          }}
        />
      </div>
    </div>
  );
};

export default Example;
