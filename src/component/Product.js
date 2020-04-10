import React, { Component } from 'react';

class Product extends Component {

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
            ],
            product: null,
            id : null,
        }


        
    }

    componentWillMount(){

        let id = this.props.match.params.product_id;
        const product =  this.state.products.filter(product => product.id == id);     
        this.setState({product:product});
    
    }

   
    
    render(){
        
        return(
            <div className='product'>
                <div className='container'>
                    <h3>
                        {
                            this.state.product[0].name
                        }
                    </h3>
                </div>
            </div>
        )
    }
}

export default Product;    