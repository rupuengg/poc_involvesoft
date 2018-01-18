export function getStyles (props, muiTheme) {
  return {
    navPanelStyle: {
      height: 900,
      width: '20%',
      float: 'left'
    },
    primaryStyle: {
      backgroundColor: muiTheme.palette.primaryColor
    },
    link:{
      color : 'black',
      textDecoration : 'none'
    },
    activeLink : {
      color : 'white',
      textDecoration : 'underline'
    },
    activePaperStyle: {
      backgroundColor:muiTheme.palette.primary1Color
    },
    inActivePaperStyle: {
    },
    activeLabelStyle: {
      color : 'white',
      textDecoration : 'underline'
    },
    inActiveLabelStyle: {
      color : 'black'
    },
    subMenuItemStyle: {
      fontSize : 15,
      color : 'white',
      marginLeft : 20
    },
    navTabsStyle: {
      float: 'left',
      width:'80%'
    },
    navTabsHeaderStyle: {
      height:80,
      width:'100%',
      marginTop: 40,
      textAlign : 'center',
      align : 'center'
    },
    navTabsContentStyle: {
      height:100,
      width:'100%',
      display: 'inline',
      marginLeft: 400,
      textAlign : 'center',
      float: 'left',
      align : 'center'
    },
    navTabsLink: {
      color : 'black',
      textDecoration : 'none',
      padding: '10px 20px',
      marginLeft: 40,
      display: 'inline-block',
      float: 'left'
    },
    navTabsActiveLink: {
      color : 'black',
      textDecoration : 'none',
      padding: '10px 20px',
      display: 'inline-block',
      marginLeft: 40,
      marginRight: 40,
      borderBottom: '3px solid',
      borderColor:muiTheme.palette.primary1Color,
      float: 'left'
    }
  }
}

