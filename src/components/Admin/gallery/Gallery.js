import React , {useEffect, useState} from 'react';
import PageHeader from '../../layout/PageHeader';
import { connect } from 'react-redux';
import Alert from '@material-ui/lab/Alert';
import { listRef , firebaseStorage } from '../../../config/fbConfig';
import { listAll, getDownloadURL , ref } from 'firebase/storage';

const Gallery = () => {

  
  const urls = [];
  const [photos,setPhotos]    = useState([]);
  const [loading,setLoading]  = useState(false);

  useEffect(() => {
    
    listAll(listRef)
      .then((res) => {
          res.items.map((itemRef) => {
            urls.push(itemRef)
          });
      }).then(
        console.log('done')
      )
      .catch((error) => {
        console.log(error)
      });

      // getDownloadURL(ref(firebaseStorage))
      //   .then(url => {
      //     console.log('url: ',url)
      //   })
      //   .catch(error => console.log(error))
    
}, []);

  return (
    <div className="gallery">
      <div className='container'>
        <PageHeader title='Gallery' />
          {
            loading === true ? <div>Loading</div> :
              photos.length === 0 ?
                <Alert severity='info'>No Photos in the Gallery</Alert> :
                photos.map((photo,i) => 
                  <div key={i}>
                    <img src={photo} alt='sadsd'/>
                  </div>)
          }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    photos: state.photos
  }
}

export default connect(mapStateToProps,null)(Gallery)