import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const Header = () => {
  return (
    <div>
      <AppBar style={{ backgroundColor: "#40230E" }}>
        <Toolbar
          style={{
            display: "flex",
            flex: "1 1",
            justifyContent: "space-between",
          }}
        >
          <h1>logo</h1>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
