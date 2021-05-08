const styles = (theme) => ({
  
    main: {
        display: 'flex',
        justifyContent: 'space-around',
        paddingTop: 70,
    },
    editInfo: {
        width: '30%',
    },
    showInfo: {
        width: '50%',
        borderLeft: '1px solid red',
        paddingLeft: 52
    },
    img: {
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: 170
    },
    resetPwd: {
        borderBottom: '1px solid gray', 
        paddingBottom: 20,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    changeOtherInfo: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    }

});

export default styles;