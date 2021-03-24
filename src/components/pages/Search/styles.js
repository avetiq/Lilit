const styles = (theme) => ({
    main: {
        backgroundImage: 'url(../../../photos/backgroundSearch.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vu',
        height: '100vh',
    },
    formControl: {
        width: '100%',
        marginTop: 25,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    searchBtn: {
        margin: '0 auto',
        marginTop: 25,
        width: '15%',
    },
    dates: {
        marginTop: 12,
        display: 'flex',
        justifyContent: 'space-between',
    },
    inputColor: {
        backgroundColor: 'white',
        borderRadius: 4,
    },
    d2: {
        textAlign: 'center'
    },
    p2: {
        fontSize: 70,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bolder'	
    },
    line: {
        borderBottom: '3px solid white',
        width: '8%',
        display: 'inline-block'
    },
    error: {
        color: 'white',
        fontSize: 12,
        margin: 0,
    },
    errorDiv: {
        display: 'flex',
        justifyContent: 'center',
    }

});

export default styles;