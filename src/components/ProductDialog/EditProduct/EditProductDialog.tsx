import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import heroFactoryImg from './hero_factory.png';
import startWarsImg from './star_wars.png';
import legoMovieImg from './the_lego_movie.png';

interface Props {
    open: boolean;
    onClose: () => void;
    onEdit: (categoryName: string) => void;
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
        buttonSelected: {
            backgroundColor: theme.palette.primary.main
        }
    }),
);

export default function EditProductDialog(props: Props) {
    const classes = useStyles();

    const [categoryName, setCategoryName] = React.useState('');

    const handleCategorySelected = (categoryName: string) => {
        setCategoryName(categoryName);
    };

    const handleCloseClick = () => {
        props.onClose();
        setCategoryName('')
    }

    const handleEditClick = () => {
        props.onEdit(categoryName);
        setCategoryName('')
    }

    return (
        <Dialog
            fullWidth
            open={props.open}
            aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Edit Product</DialogTitle>
            <DialogContent>
                <form className={classes.form}>
                    <FormControl>
                        <FormLabel component="legend" className={classes.title}>Choose Category</FormLabel>
                        <Button
                            disableRipple
                            onClick={() => handleCategorySelected('HeroFactory')}
                            className={categoryName === 'HeroFactory' ? classes.buttonSelected : ''}
                        >
                            <img src={heroFactoryImg} alt="categoryImage" />
                        </Button>
                        <Button>
                            <img src={startWarsImg} alt="categoryImage" />
                        </Button>
                        <Button>
                            <img src={legoMovieImg} alt="categoryImage" />
                        </Button>
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