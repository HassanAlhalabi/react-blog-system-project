import React , {Component} from 'react';
import {Navbar,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Header extends Component {

    constructor(){
        super()  
        this.state = {
            searchTerm: ''
        }
    }

    setSearchTerm = (e)=> {
        e.preventDefault();
        var newSearchTerm = document.getElementById('search').value;
        this.setState({searchTerm:newSearchTerm});
        this.props.getSearchTerm(newSearchTerm);
    } 

    render(){
        return(
            <Navbar bg="light" expand="lg">
                <Container>
                    
                    <div>
                        <Link to='/home'>Home</Link>
                        <Link to='/products'>Products</Link>
                        <Link to='/page2'>page2</Link>
                    </div>
                    
                </Container>    
            </Navbar>
        )    
    }
}
export default Header ;   