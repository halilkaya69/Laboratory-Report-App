import React, { Component } from "react";
import { Button, Select ,TextInput} from "@mantine/core";
import Table1 from "./Table1";

class Ara1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arananDeger: "", 
      arananDeger2: "", 
      reports: [],
    };
  }

  
  handleSubmit = (event) => {
    event.preventDefault();
    this.findReport(this.state.arananDeger,this.state.arananDeger2);
  };
  
  handleChange = (event) => {
    const { value } = event.target;
    this.setState((prevState) => ({
        arananDeger2:value
      
    }));
  };
  findReport = (arananDeger,arananDeger2) => {
    fetch("http://localhost:3000/reports/?"+arananDeger+"="+arananDeger2)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ reports: data });
      })
      .catch((error) => {
        console.error('Error fetching reports:', error);
      });
  };
  


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Select
            label="Rapor ara"
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
          <TextInput
              label="laborantAd"
              name="laborantAd"
              type="text"
              id="laborantAd"
              onChange={this.handleChange}

              />
          <Button type="submit" fullWidth>
            Ara
          </Button>
        </form>
        <Table1 reports={this.state.reports} deleteData={this.props.deleteData} />
        </div>
    );
  }
}

export default Ara1;
