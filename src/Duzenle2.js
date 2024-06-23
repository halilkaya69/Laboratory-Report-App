import React, { Component } from "react";
import { TextInput, Button, Table } from "@mantine/core";
import TableTr1 from "./TableTr1";

class Duzenle2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      report: props.report || {
        laborantAd: "",
        laborantSoyad: "",
        laborantNo: "",
        dosyaNo: "",
        hastaAd: "",
        hastaSoyad: "",
        hastaTC: "",
        tarih: "",
        taniAdi: "",
        taniDetay: "",
        taniResimLink: "",
      },
      counter: 1,
      reports: [],
      arananDeger: "",  
    };
  }

  componentDidMount() {
    this.props.getReports();
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      report: {
        ...prevState.report,
        [name]: value,
      },
    }));
  };

  handleSubmit3 = (event) => {
    console.log("edit");
    event.preventDefault();

    const { id } = this.props.report; // props'tan report içindeki id değerini alıyoruz
    console.log(id);
    fetch(`http://localhost:3000/reports/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.report),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("Post successfully updated");
       
        this.props.getReports();
        
        
      })
      .catch((error) => {
        console.error("Error updating post:", error);
      });
  };

  render() {
    const { report } = this.props;

    if (!report) {
      return <div>Loading...</div>; // or handle the undefined report case as needed
    }

    return (
      <div>
        <h1>{report.id}</h1>
        <h1>Duzenle2</h1>

        <div>
          <form onSubmit={this.handleSubmit3}>
            <TextInput
              label="laborantAd"
              name="laborantAd"
              type="text"
              placeholder={report.laborantAd}
              id="laborantAd"
              onChange={this.handleChange}
            />
            <TextInput
              label="laborantSoyad"
              name="laborantSoyad"
              type="text"
              placeholder={report.laborantSoyad}
              id="laborantSoyad"
              onChange={this.handleChange}
            />
            <TextInput
              label="laborantNo"
              name="laborantNo"
              type="text"
              placeholder={report.laborantNo}
              id="laborantNo"
              onChange={this.handleChange}
            />
            <TextInput
              label="dosyaNo"
              name="dosyaNo"
              type="text"
              placeholder={report.dosyaNo}
              id="dosyaNo"
              onChange={this.handleChange}
            />
            <TextInput
              label="hastaAd"
              name="hastaAd"
              type="text"
              placeholder={report.hastaAd}
              id="hastaAd"
              onChange={this.handleChange}
            />
            <TextInput
              label="hastaSoyad"
              name="hastaSoyad"
              type="text"
              placeholder={report.hastaSoyad}
              id="hastaSoyad"
              onChange={this.handleChange}
            />
            <TextInput
              label="hastaTC"
              name="hastaTC"
              type="text"
              placeholder={report.hastaTC}
              id="hastaTC"
              onChange={this.handleChange}
            />
            <TextInput
              label="tarih"
              name="tarih"
              type="text"
              placeholder={report.tarih}
              id="tarih"
              onChange={this.handleChange}
            />
            <TextInput
              label="taniAdi"
              name="taniAdi"
              type="text"
              placeholder={report.taniAdi}
              id="taniAdi"
              onChange={this.handleChange}
            />
            <TextInput
              label="taniDetay"
              name="taniDetay"
              type="text"
              placeholder={report.taniDetay}
              id="taniDetay"
              onChange={this.handleChange}
            />
            <TextInput
              label="taniResimLink"
              name="taniResimLink"
              type="text"
              placeholder={report.taniResimLink}
              id="taniResimLink"
              onChange={this.handleChange}
            />
            <Button variant="filled" color="grape" type="submit">
              Save
            </Button>
          </form>
        </div>

        <div>
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>laborantAd</Table.Th>
                <Table.Th>laborantSoyad</Table.Th>
                <Table.Th>laborantNo</Table.Th>
                <Table.Th>dosyaNo</Table.Th>
                <Table.Th>hastaAd</Table.Th>
                <Table.Th>hastaSoyad</Table.Th>
                <Table.Th>hastaTC</Table.Th>
                <Table.Th>tarih</Table.Th>
                <Table.Th>taniAdi</Table.Th>
                <Table.Th>taniDetay</Table.Th>
                <Table.Th>taniResimLink</Table.Th>
                <Table.Th>degistir</Table.Th>
                <Table.Th>detay</Table.Th>
                <Table.Th>sil</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              <TableTr1 report={report} deleteData={this.props.deleteData} />
            </Table.Tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Duzenle2;
