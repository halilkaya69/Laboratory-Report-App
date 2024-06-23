import React, { Component } from "react";
import { Button, Select } from "@mantine/core";

class SiralaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arananDeger: "", 
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.getReports(this.state.arananDeger);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Select
            label="Sort by"
            placeholder="Pick value"
            value={this.state.arananDeger}
            onChange={(value) => this.setState({ arananDeger: value })}
            data={[
              "laborantAd",
              "laborantSoyad",
              "laborantNo",
              "dosyaNo",
              "hastaAd",
              "hastaSoyad",
              "hastaTC",
              "tarih",
              "taniAdi",
              "taniDetay",
              "taniResimLink",
            ]}
            mb="sm"
          />
          <Button type="submit" fullWidth>
            Sırala
          </Button>
        </form>
      </div>
    );
  }
}

export default SiralaForm;
