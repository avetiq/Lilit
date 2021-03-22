const styles = (theme) => ({
    formInputs: {
        width: '40%',
        border: '1px solid gray',
        [theme.breakpoints.down('md')]: {
            width: '50%',
            [theme.breakpoints.down('sm')]: {
                width: '90%',
            },
        }
    },    
    main: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 10,
        flexDirection: 'column',
    },    
    headerLinks: {
        width: '30%',
        [theme.breakpoints.down('md')]: {
            width: '30%',
            [theme.breakpoints.down('sm')]: {
                width: '50%',
            },
        },
        display: 'flex',
        justifyContent: 'space-between',
    },    
    headerLinksColor: {
        cursor: 'pointer',
        color: 'yellowgreen',
    },
    linkBackground: {
        color: 'white',
        fontSize: 21
    },
    buttonPadding: {
        padding: 0,
    },
    buttonHeightMax: {
        height: 40
    },
    buttonHeightMin: {
        height: 30
    },

});

export default styles;
