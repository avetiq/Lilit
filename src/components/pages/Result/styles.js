const styles = (theme) => ({
    formInputs: {
        width: '35%',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
        },
        [theme.breakpoints.only('md')]: {
            width: '50%',
        }
    },    
    main: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 10,
        flexDirection: 'column',
    },    
    headerLinks: {
        width: '15%',
        [theme.breakpoints.down('sm')]: {
            width: '50%',
        },
        [theme.breakpoints.only('md')]: {
            width: '30%',
        },
        display: 'flex',
        justifyContent: 'space-between',
    },    
    headerLinksColor: {
        cursor: 'pointer',
        color: 'yellowgreen',
    }
});

export default styles;
