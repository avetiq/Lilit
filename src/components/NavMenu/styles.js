const styles = (theme) => ({
    active: {
        color: 'white !important',
        fontWeight: 800,
    },
    linkRight: {
        fontSize: 22,
        color: 'wheat',
        "&:hover": {
            textDecoration: 'none',
            color: 'white'
        }
    },
    main: {
        display: 'flex',
        justifyContent: 'center !important',
    },
    link: {
        marginRight: 60,
        [theme.breakpoints.down('sm')]: {
            marginRight: 36,
        },
        fontSize: 22,
        color: 'wheat',
        "&:hover": {
            textDecoration: 'none',
            color: 'white'
        }
    },
    
});


export default styles;