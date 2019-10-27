import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { ProductInterface } from '../../../interfaces';

import heroFactoryImg from '../../../static/hero_factory.png';
import startWarsImg from '../../../static/star_wars.png';
import legoMovieImg from '../../../static/the_lego_movie.png';

var categories = [
    {
        id: 0,
        imgSrc: heroFactoryImg
    }, {
        id: 1,
        imgSrc: startWarsImg
    }, {
        id: 2,
        imgSrc: legoMovieImg
    },
];

type EditProductDialogProps = {
    open: boolean;
    onClose: () => void;
    onEdit: (categoryId: number) => void;
    product: ProductInterface;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        form: {
            display: 'flex',
            flexDirection: 'column',
            margin: 'auto',
            width: 'fit-content',
        },
        title: {
            textAlign: 'center',
            padding: theme.spacing(0, 0, 2, 0)
        },
        dialogTitle: {
            textAlign: 'center'
        },
        buttonSelected: {
            backgroundColor: theme.palette.grey[600],
            "&:hover": {
                //you want this to be the same as the backgroundColor above
                backgroundColor: theme.palette.grey[600]
            }
        }
    }),
);

export default function EditProductDialog(props: EditProductDialogProps) {
    const classes = useStyles();

    const [selectedCategoryId, setSelectedCategory] = React.useState(props.product.id);
        
    const handleCategorySelected = (categoryId: number) => {
        setSelectedCategory(categoryId);
    };

    const handleCloseClick = () => {
        props.onClose();
    }

    const handleEditClick = () => {
        props.onEdit(selectedCategoryId);
    }

    return (
        <Dialog
            fullWidth
            open={props.open}
            aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>Edit Product</DialogTitle>
            <DialogContent>
                <form className={classes.form}>
                    <FormControl>
                        <FormLabel component="legend" className={classes.title}>Choose Category</FormLabel>
                        {
                            categories.map(category => (
                                <Button
                                    key={category.id}
                                    disableRipple
                                    onClick={() => handleCategorySelected(category.id)}
                                    className={selectedCategoryId === category.id ? classes.buttonSelected : ''}
                                >
                                    <img src={category.imgSrc} alt="categoryImage" />
                                </Button>)
                            )
                        }
                    </FormControl>
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseClick}>
                    Cancel
                </Button>
                <Button onClick={handleEditClick}>
                    Save
                </Button>
            </DialogActions>
        </Dialog >
    );
}