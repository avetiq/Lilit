const styles = () => ({
   
    car: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20,
        width: '30%'
    },
    ourCars: {
         width: '100%',
         marginTop: 30,
         paddingBottom: 100,
         display: 'flex',
         alignItems: 'center',
         flexDirection: 'column'
    },
    row: {
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'space-between'
    },
    image: {
         width: 266,
         height: 200,
         backgroundSize: 'contain',
         backgroundRepeat: 'no-repeat',
         backgroundPositionX: 'center'
    },
    imgLogo: {
        width: 300,
         height: 250,
         backgroundSize: 'contain',
         backgroundRepeat: 'no-repeat',
         backgroundPositionX: 'center'
    }
});

export default styles;
