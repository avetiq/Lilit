const styles = (theme) => ({
    main: {
        width: '60%',
        [theme.breakpoints.down('md')]: {
            width: '75%',
            [theme.breakpoints.down('sm')]: {
                width: '90%',
            },
        },
        display: 'flex',
        marginTop: 30,
        flexDirection: 'column'
    },
    headerPart: {
        display: 'flex',
        justifyContent: 'center'
    },
    hotelName: {
        marginLeft: 40,
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        },
    },
    contextPart: {
        marginTop: 10,
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        },
    },
    imageDiv: {
        width: '25%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
        },
        marginRight: '20px !important'
    },
    descriptionDiv: {
        [theme.breakpoints.down('sm')]: {
            padding: '0 35px',
        },
    }    

});

export default styles;
