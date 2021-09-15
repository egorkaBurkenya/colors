import React from 'react';

const Color = ({main, title ,color, ColorArea}) => {

    const rgbColor = ColorArea(color);
    console.log(rgbColor);

    return (
        <div className="color" style={{textAlign: 'center'}}>
            <h5 style={{margin: 0}}>{title}</h5>
            <div className={main ? 'main-color' : 'color-view'} style={{backgroundColor: color}}></div>
            <p className="color-hex">{color}</p>
            <p className="color-info">R: {rgbColor.r}</p>
            <p className="color-info">G: {rgbColor.g}</p>
            <p className="color-info">B: {rgbColor.b}</p>
        </div>
    );
};

export default Color;