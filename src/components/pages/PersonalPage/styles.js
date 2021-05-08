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
    female: {
        backgroundImage: 'url(../../../photos/vika.png)',
        backgroundSize: 'contain',
        height: '100%',
        backgroundRepeat: 'no-repeat'
    },
    male: {
        backgroundImage: 'url(../../../photos/ashot.jpg)',
        backgroundSize: 'contain',
        height: '100%',
        backgroundRepeat: 'no-repeat'
    },

});

export default styles;