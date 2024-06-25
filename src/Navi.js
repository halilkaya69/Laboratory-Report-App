import { Menu, Button } from "@mantine/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navi extends Component {
  render() {
    return (
      <div>
        <hr />

        <div style={{ display: "flex", alignItems: "center" }}>
          <Menu width={200}>
            
              <Link to="/"><Button style={{ marginLeft: "20px" }}>Ana Sayfa </Button></Link>
           
            
              <Link to="/ekle"><Button style={{ marginLeft: "20px" }}>Rapor Ekle</Button></Link>
            
            
              <Link to="/ara"><Button style={{ marginLeft: "20px" }}>Rapor Ara </Button></Link>
           
          </Menu>
        </div>

        <hr />
      </div>
    );
  }
}
