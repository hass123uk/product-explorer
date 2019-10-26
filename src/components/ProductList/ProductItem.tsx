import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ProductItemActions from './ProductItemActions';

export default function ProductItem() {
    return (
        <ListItem
            alignItems="flex-start"
            divider={true}>
            <ListItemText>
                <Typography variant="body1" color="textSecondary">#56412</Typography>
                <Typography variant="subtitle1">Factory Machine</Typography>
                <Typography variant="body1" color="textSecondary">LEGO Technic</Typography>
                <Typography variant="h6">$500</Typography>
            </ListItemText>
            <ProductItemActions />
        </ListItem>
    );
}