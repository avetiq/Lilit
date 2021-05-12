const styles = (theme) => ({
  
    main: {
        display: 'flex',
        justifyContent: 'space-around',
        paddingTop: 70,
        background: '#f0f2f5',
    },
    editInfo: {
        width: '30%',
    },
    showInfo: {
        width: '50%',
        borderLeft: '1px solid gray',
        paddingLeft: 52,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    img: {
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: 170,
        width: '34%',
    },
    resetPwd: {
        borderTop: '1px solid gray', 
        paddingBottom: 20,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    seeInfo: {
        marginBottom: 20,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    changeOtherInfo: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        marginBottom: 20
    },
    oneReserve: {
        display: 'flex',
        border: '1px solid gray',
        marginBottom: 40,
        padding: 15
    },
    infoMoney: {
        marginLeft: 30
    }

});

export default styles;