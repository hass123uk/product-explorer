import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ProductItemActions from './ProductItemActions';
import { ProductInterface } from '../../interfaces'
import { observer } from 'mobx-react';

type ProductItemProps = {
    product: ProductInterface
}

function ProductItem(props: ProductItemProps) {
    return (
        <ListItem
            alignItems="flex-start"
            divider={true}>
            <ListItemText>
                <Typography variant="body1" color="textSecondary">#{props.product.id}</Typography>
                <Typography variant="subtitle1">{props.product.name}</Typography>

                {props.product.category &&
                    <Typography variant="body1" color="textSecondary">{props.product.category.name}</Typography>
                }

                <Typography variant="h6">${props.product.price}</Typography>
            </ListItemText>
            <ProductItemActions />
        </ListItem>
    );
}

export default observer(ProductItem);