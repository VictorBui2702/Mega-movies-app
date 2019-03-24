import React, { Component } from 'react';
import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider';
// import Handle from './Handle.js';


 export default class YearRange extends Component {
          
    render () {
        const sliderStyle = {  // Give the slider some width
            position: 'relative',
            width: '100%',
            height: 80,
            border: '1px solid steelblue',
          } 

          const railStyle = { 
            position: 'absolute',
            width: '100%',
            height: 10,
            marginTop: 35,
            borderRadius: 5,
            backgroundColor: '#8B9CB6',
          }
          

          
            return ( 
            <div>    

            {/* Create Slider  */}
            <div>
                <Slider
                rootStyle={this.sliderStyle} // inline styles for the outer div. Can also use className prop.
                domain={[0, 2019]}
                values={[10]}>
                <div style={railStyle} /> 
               
                    {/* <Handles> {/* Create Handles  */}
                    {/* {({ handles, getHandleProps }) => (
                    <div className="slider-handles">
                    {handles.map(handle => (
                        <Handle
                        key={handle.id}
                        handle={handle}
                        getHandleProps={getHandleProps}
                        />
                    ))}
                    </div>
                    )}
                    </Handles> */} */}
                </Slider>
            </div>
            </div>
            )
        }  
      }
