import React from 'react';
import Typography from '@material-ui/core/Typography';
import LatestArticleCard from '../LatestArticleCard';
import {connect} from 'react-redux';

const Sidebar = ({articles}) => {
    const latestArticles = articles.slice(-5).reverse();
    console.log(latestArticles)
    return ( 
        <div className='sidebar h-100'>
            <div className='p-2 p-md-4'>
                <div className='sidebar-latest-articles'>
                    <Typography variant='h5' className='pl-0'>
                        Latest Articles:
                    </Typography>
                    <div>
                        {
                            latestArticles.map(article => {
                                return <LatestArticleCard
                                        id={article.id} 
                                        title={article.title}
                                        articleImg={article.urlToImage} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
     );
}

const mapStateToProps = state => {
    return ({
        articles: state.articles
    })
}
 
export default connect(mapStateToProps)(Sidebar);