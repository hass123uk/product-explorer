import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ProductItem from './ProductItem'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            padding: theme.spacing(0, 4, 0, 4)
        }
    }),
);

function generate(element: React.ReactElement) {
    return [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map(value =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

export default function ProductList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                <List>
                    {generate(
                        <ProductItem />
                    )}
                </List>
            </div>
        </div>
    );
}