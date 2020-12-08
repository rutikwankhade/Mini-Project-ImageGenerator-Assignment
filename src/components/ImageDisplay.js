import React from 'react';
const ImageDisplay = ({ imgUrl, loading }) => {

    return (
        loading ? 'Loading...' :
            <div>
                <img src={imgUrl} alt="image" />
            </div>

    );
}

export default ImageDisplay;