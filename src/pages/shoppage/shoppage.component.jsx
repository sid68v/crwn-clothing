import React, { Component } from 'react'
import '../shoppage/shoppage.styles.scss'

import SHOP_DATA from '../../shop.data'

import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class ShopPage extends Component {
    constructor(props) {
        super();
        this.state = {
            collections: SHOP_DATA,
        }
    }

    render() {
        return (
            <div className='shop-page'>
              {this.state.collections.map( ({id,...otherProps}) => <CollectionPreview key={id} {...otherProps}/> )}
            </div>
        )
    }


}

export default ShopPage