const styles = () => ({
     main: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
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
        paddingBottom: 50,
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
   },
   video: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingBottom: 100,
        width: '20%',
        margin: '0 auto'
   },
   videoWrapper: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '70%',
        paddingTop: 20,
        margin: '0 auto'
   }

});

export default styles;
