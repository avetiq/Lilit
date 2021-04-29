const styles = (theme) => ({
    main: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    contentPart: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 100
    },
    headerContent: {
        marginTop: 25,
        width: '60%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    content: {
        width: '37%',
        marginRight: 20
    },
    slider: {
        '&>ul': {
            marginBottom: '80px',
        },
        '&>svg': {
            color: "aliceblue",
            zIndex: 10,
            fontSize: 74,
        }, 
    },

});

export default styles;
