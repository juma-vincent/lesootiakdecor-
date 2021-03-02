import React,{useEffect, useState} from "react";
import './proposal.scss';

import Spinner from "../../components/spinner/spinner";
import axios from 'axios';


class ProposalPage extends React.Component {
    state ={ 
        products:[]
        }  

    async componentDidMount(){
    const res = await axios.post('/api/filter_product_by_subcategory',
        { subcategoryName: this.props.match.params.subcategoryName}
    );
    
    this.setState({ products: res.data});
   

    }    

    render() {         
    
    return ( 
      
      
      <>
        {this.state.products?
        (
         <div className="products-page">           
            <h1 id='proposal-title'>PROPOSAL</h1>
            <div id='proposal-description'>
            Talk to us about your proposal, we'll make it worth her while.
            </div>
            <div className="products">            
              {this.state.products.map((product) => (

                <div key={product._id}
                className='proposal-page-image' style={{ backgroundImage: `url(${product.imageurl}) `}}>
                </div>

              ))}
            </div>
            
          </div>
        )
        :
        <Spinner/>
        }
      </>
    
     );
  }
}
 

export default ProposalPage;
