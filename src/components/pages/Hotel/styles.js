const styles = (theme) => ({
  main: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  contentPart: {
    display: "flex",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  headerContent: {
    marginTop: 25,
    width: "42%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  content: {
    width: "37%",
    marginRight: 20,
  },
  slider: {
    "&>ul": {
      marginBottom: "80px",
    },
    "&>svg": {
      color: "aliceblue",
      zIndex: 10,
      fontSize: 74,
    },
    "& .slick-prev": {
      left: "-10px",
      transition: "left 0.2s ease",

      "&:hover": {
        color: "white",
        left: "-20px",
      },
    },
    "& .slick-next": {
      right: "-10px",
      transition: "right 0.2s ease",

      "&:hover": {
        color: "white",
        right: "-20px",
      },
    },
  },
  freeRooms: {
    marginBottom: 100,
    width: 600,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  freeRoom: {
    width: "100%",
    height: 50,
    display: "flex",
    marginBottom: 10,
    justifyContent: "space-between",
  },
  dates: {
    display: "flex",
    justifyContent: "space-between",
  },
  bedImg: {
    width: 50,
    height: 50,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "center",
  },
});

export default styles;
