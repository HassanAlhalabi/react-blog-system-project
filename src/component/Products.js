import React,{Component}  from 'react';
import {Link} from 'react-router-dom';

class Products extends Component {

    constructor(){
        super()
        this.state = {
        products : [
            {
            id : 1,
            name : 'Product1'
            },{
            id : 2,
            name : 'paroduct2'
            }
        ]
        }
    }

    render(){

        return(
            <div className='products'>
                <div className='container'>
                    <div>
                        <h2 className='mt-4 mb-4'>Products Of Our Store:</h2>
                    </div>
                    <div className='row'>
                        {
                            this.state.products.map(
                                product => {
                                    return(
                                        <div key={product.id} className='col-12 col-sm-6 col-md-4 col-lg-3'>
                                            <Link to={'/product/' + product.id}>
                                                {product.name}
                                            </Link>
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        );

    }

    
}
export default Products; 