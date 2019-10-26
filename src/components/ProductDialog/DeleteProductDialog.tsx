import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
        },
    }),
);

interface DeleteProductDialogProps {
    open: boolean;
    onClose: () => void;
    onDelete: () => void;
}

export default function DeleteProductDialog(props: DeleteProductDialogProps) {
    const classes = useStyles();

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.onClose}
                aria-labelledby="delete-product-dialog-title"
                aria-describedby="delete-product-dialog-description"
            >
                <DialogTitle id="delete-product-dialog-title">{"Delete Product?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="delete-product-dialog-description">
                        Are you sure you want to delete this product?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        onClick={props.onDelete}
                        startIcon={<DeleteIcon />}
                    >
                        Delete
                    </Button>
                    <Button 
                        variant="contained"
                        className={classes.button}
                        onClick={props.onClose}
                    >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}