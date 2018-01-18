  /**
 * function for styles of Login
*/
export function getStyles (props, muiTheme) {
  return {
    container: {
      padding: 30,
      paddingBottom: 10,
      paddingTop: 10,
      width: 700,
      backgroundColor: muiTheme.palette.canvasColor
    },
    loginTopWrapper: {
      margin: 'auto',
      marginBottom: 0
    },
    loginMiddleWrapper: {
      marginTop: 10
    },
    header: {
      textAlign: 'center'
    },
    headerHeadline: {
      margin: 0,
      fontWeight: 'normal',
      textAlign: 'center'
    },
    headerText: {
      display: 'block',
      marginTop: 5,
      marginBottom: 10,
      fontSize: 15,
      color: (muiTheme.palette.textColor, 0.54)
    },
    textField: {
      width: '100%'
    },
    forgotPassword: {
      textAlign: 'right',
      fontSize: 14,
      lineHeight: '21px'
    },
    accountCreateTopWrapper: {
      padding: '10px 30px'
    },
    actionWrapper: {
      textAlign: 'center',
      fontSize: 14
    },
    usernameTextFieldError: {
      borderColor: muiTheme.textField.errorColor
    },
    passwordErrorText: {
      marginTop: 5,
      marginBottom: 20,
      color:muiTheme.textField.errorColor
    },
    passwordErrorIcon: {
      float: 'right',
      height: 16,
      width: 16
    },
    raisedButton: {
      backgroundColor: muiTheme.raisedButton.backgroundColor
    },
    paperStyle: {
      height: 500,
      width: 800,
      margin: 500,
      display: 'inline-block',
      marginTop:'5%'
    },
    primaryStyle: {
      backgroundColor: muiTheme.palette.primaryColor
    },
    radioButton: {
      wordWrap:'none'
    }
  }
}
