import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {firebaseStorage} from '../../../config/fbConfig';
import PageHeader from '../../layout/PageHeader';
import AddAPhoto from '@material-ui/icons/AddAPhoto';
import Close from '@material-ui/icons/Close';
import CloudUpload from '@material-ui/icons/CloudUpload';
import Delete from '@material-ui/icons/Delete';
import {connect} from 'react-redux';
import { addPhoto } from '../../../store/actions/actions';

const UploadPhotos = ({addPhoto}) => {
    
    const [images, setImages] = useState([]);
    const [imagePreview,setImagePreview] = useState(null)

    const maxNumber = 10;

    const onChange = (imageList, addUpdateIndex) => {
      setImages(imageList);
    };

    const imageUpload = () => {
      images.map(image => {
            const storageRef = ref(firebaseStorage, image.file.name);
            const uploadTask = uploadBytesResumable(storageRef, image.file);

            // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure
            // 3. Completion observer, called on successful completion
            uploadTask.on('state_changed', 
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                }
            }, 
            (error) => {
                console.log(error)
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('upload done')
                    addPhoto(downloadURL)
                });
            });
      })
    }

    const handleImagePreview = image => setImagePreview(image)

    const handleImagePreviewClose = () => setImagePreview(null)
    

    return (
        <div className="upload-photos">
            <div className='container'> 
                <PageHeader title='Upload New Photos'/>   
                <ImageUploading
                    multiple
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url">
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
                                className='add-photo-button'
                            >
                                <div>
                                    <AddAPhoto fontSize='large' />
                                </div>
                                Click or Drop here
                            </button>
                            <div className='photos-preview'>
                                {imageList.map((image, index) => (
                                    <div key={index} className="image-item">
                                        <img src={image['data_url']} alt="" onClick={() => handleImagePreview(image['data_url'],'show')}/>
                                        <div className="image-item__btn-wrapper">
                                            <button className='mr-2' onClick={() => onImageUpdate(index)}>Update</button>
                                            <button className='mr-2' onClick={() => onImageRemove(index)}>Remove</button>
                                        </div>
                                    </div>   
                                ))}
                                <div 
                                    className={imagePreview === null?
                                    'photo-full-preview photo-full-preview-hide'
                                    :'photo-full-preview-show photo-full-preview'}>
                                    <div 
                                        className='photo-full-preview-close'
                                        onClick={handleImagePreviewClose}>
                                            <Close />
                                    </div>
                                    <img src={imagePreview} alt='image-preview'/>
                                </div>
                            </div>
                            <div className='upload-photos-actions-btn pt-5'>
                                <button onClick={onImageRemoveAll} className='mr-3'>
                                    <Delete /> <span>Remove all images</span>
                                </button>
                                <button 
                                    onClick={imageUpload} 
                                    disabled={images.length === 0} 
                                    className='landing-button'>
                                        <CloudUpload /> <span>UPLOAD</span>
                                </button>
                            </div>      
                        </div>
                    )}
                </ImageUploading>
            </div>
        </div>    
    );
}

const mapDispatchToProps = dispatch => {
    return {
        addPhoto: url => dispatch(addPhoto(url)) 
    }
}

export default connect(null,mapDispatchToProps)(UploadPhotos)