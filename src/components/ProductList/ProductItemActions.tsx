import React from 'react';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import EditProductDialog from '../ProductDialog/EditProduct/EditProductDialog'
import DeleteProductDialog from '../ProductDialog/DeleteProductDialog';
import { observer } from 'mobx-react-lite';

function ProductItemActions({ product }: any) {
    const [openEditDialog, setOpenEditDialog] = React.useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);

    const handleClickEditDialogOpen = () => {
        setOpenEditDialog(true);
    };
    const handleClickEditDialogClose = () => {
        setOpenEditDialog(false);
    };
    const handleClickEditDialogEdit = () => {
        setOpenEditDialog(false);
        console.log('Edit')
    }

    const handleClickOpenDeleteDialog = () => {
        setOpenDeleteDialog(true);
    };
    const handleClickDeleteDialogClose = () => {
        setOpenDeleteDialog(false);
    };
    const handleClickDeleteDialogDelete = () => {
        setOpenDeleteDialog(false);
        product.remove()
    }

    return (
        <React.Fragment>
            <ListItemSecondaryAction>
                <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={handleClickEditDialogOpen}
                >
                    <EditIcon />
                </IconButton>
                <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={handleClickOpenDeleteDialog}
                >
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
            <EditProductDialog open={openEditDialog} onEdit={handleClickEditDialogEdit} onClose={handleClickEditDialogClose} />
            <DeleteProductDialog open={openDeleteDialog} onDelete={handleClickDeleteDialogDelete} onClose={handleClickDeleteDialogClose} />
        </React.Fragment>
    );
}

export default observer(ProductItemActions);