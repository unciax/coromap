import Slide from '@material-ui/core/Slide';

export const message = (enqueueSnackbar, msg, type) => {
    enqueueSnackbar(msg, {
        variant: type,
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'center',
        },
        TransitionComponent: Slide,
    })
}