const styles = () => ({
   main: {
       
   },
   slide: {
       paddingTop: 40,
   },
   content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 25,
   },
   textAndMap: {
        marginTop: 25,
        justifyContent: 'center',
        display: 'flex',
   },
   text: {
       width: '40%',
       marginRight: 30
   },
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
   }

});

export default styles;
