import React from 'react';

const PhotosNav = (props) => {
  return (
    <div className="photos-nav">
      <h2 className="photos-nav-header">Browse by Event:</h2>
      <ul className="photos-nav-list">
        {props.images.map((gallery) => {
          return (
            <>
              <li className="photos-nav-item" id={gallery.id} onClick={e => props.onSelect(e.target.id)}>{gallery.title}</li>
              <i class="fas fa-leaf photos-nav-icon "></i>
            </>
          )}
        )}
      </ul>
    </div>
  )
}

export default PhotosNav;