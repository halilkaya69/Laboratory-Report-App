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
            <Button style={{ marginLeft: "20px" }}>
              <Link to="/">Ana Sayfa</Link>
            </Button>
            <Button style={{ marginLeft: "20px" }}>
              <Link to="/ekle">Rapor Ekle</Link>
            </Button>
            <Button style={{ marginLeft: "20px" }}>
              <Link to="/ara">Rapor Ara</Link>
            </Button>
          </Menu>
        </div>

        <hr />
      </div>
    );
  }
}
