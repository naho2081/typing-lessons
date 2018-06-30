import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import theme from "./MuiCustomTheme";
import { MuiThemeProvider } from "@material-ui/core/styles";

class LinearDeterminate extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <LinearProgress
          color="primary"
          variant="determinate"
          value={this.props.progress}
        />
      </MuiThemeProvider>
    );
  }
}

export default LinearDeterminate;
