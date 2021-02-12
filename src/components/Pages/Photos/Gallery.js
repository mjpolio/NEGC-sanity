import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';


const Gallery = ({id, title, photos}) => {
    const imageList = photos.map((photo) => {
        return (
            <a href={photo}>
			        <img src={photo} alt="garden" className="photos-section-item" />
            </a>
        )
    })

    const options = {
      thumbnailsGap: "100px 100px",
      showThumbnails: "false"

    }

    return (
        <div>
            <div className="heading heading-secondary photos-section-title">
              {title}
			    <div className='underline'></div>
            </div>
            
                <div className="photos-section-gallery">
                <SRLWrapper>
                {imageList}
                </SRLWrapper>
                </div>
        </div>
      )
}

export default Gallery;
