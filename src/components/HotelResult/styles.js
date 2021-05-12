const styles = (theme) => ({
  main: {
    width: "60%",
    [theme.breakpoints.down("md")]: {
      width: "75%",
      [theme.breakpoints.down("sm")]: {
        width: "90%",
      },
    },
    border: '1px solid #dcdcdc',
    padding: 20,
    borderRadius: 4,
    boxShadow: '2px 5px 20px 2px #dcdcdc',
    display: "flex",
    marginTop: 30,
    flexDirection: "column",
    backgroundColor: 'whitesmoke'
  },
  headerPart: {
    display: "flex",
    justifyContent: "center",
  },
  hotelName: {
    marginLeft: 40,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  contextPart: {
    marginTop: 10,
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  imageDiv: {
    width: "33%",
    [theme.breakpoints.down("sm")]: {
      width: "75%",
      display: "flex",
      justifyContent: "center",
    },
    marginRight: "20px !important",
  },
  imgStyle: {
    width: "100%",
  },
  descriptionDiv: {
    width: "67%",
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
    },
  },
});

export default styles;
