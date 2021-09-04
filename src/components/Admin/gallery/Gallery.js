import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import axios from 'axios';

const Gallery = () => {
    
    const [images, setImages] = React.useState([]);
    const maxNumber = 5;
  
    const onChange = (imageList, addUpdateIndex) => {
      setImages(imageList);
    };

    const imageUpload = () => {
      images.map(image => {
        const config = {
          onUploadProgress: progressEvent => console.log(progressEvent.loaded)
        }
        const formData = new FormData();
        formData.append("file",image.file);
        console.log(images[0])
        formData.append("upload_preset","exw9o5bw");
        formData.append("api_key", "183128683352529");
        console.log(formData)
        axios.post('https://api.cloudinary.com/v1_1/hassanalhalabi/image/upload',formData,config)
        .then(response => 
          console.log(response.data)  
        )
        .catch(error => console.log(error))
      })
    }

    axios.get('https://api.cloudinary.com/v1_1/demo/resources/image').then(
      response => console.log(response) 
    )
  
    return (
      <div className="App">
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="upload__image-wrapper">
              <button
                style={isDragging ? { color: 'red' } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here
              </button>
              &nbsp;
              <button onClick={onImageRemoveAll}>Remove all images</button>
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image['data_url']} alt="" width="100" />
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
        <button onClick={imageUpload}>
          UPLOAD
        </button>
      </div>
    );
  }

  export default Gallery