import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { observer } from 'mobx-react'
import ProductItem from './ProductItem'
import { ProductStore } from '../../stores/ProductStore'

const productStore = ProductStore.create();

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            padding: theme.spacing(0, 4, 0, 4)
        }
    }),
);

function ProductList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                <List>
                    {
                        productStore.products.map((product) =>
                            <ProductItem key={product.id} product={product} />
                        )
                    }
                </List>
            </div>
        </div>
    );
}

export default observer(ProductList)