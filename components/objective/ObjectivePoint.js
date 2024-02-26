import React from 'react'

const ObjectivesPoint = ({point}) => {
  return (
    <div style={{ display: 'flex', marginTop: '15px', marginLeft: '5px' }}>
      <img
        src="plus_icon.png"
        style={{
          width: '24px',
          height: '24px',

          transform: 'rotate(-0deg)',
          marginLeft: '216px',
        }}
      />

      <p
        className="bg-gg"
        style={{
          fontFamily: 'Abel',
          fontSize: '16px',
          fontWeight: 400,
          lineHeight: '20px',
          letterSpacing: '0em',
          textAlign: 'left',
          color: '#5B5B5B',
          marginLeft: '20px',
          marginRight: '100px',
          transform: 'rotate(-0deg)',
          
         
          backgroundColor: 'transparent !important',
        }}>
        {point}
      </p>
    </div>
  );
}

export default ObjectivesPoint
