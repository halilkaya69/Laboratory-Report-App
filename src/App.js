import "@mantine/core/styles.css";
import Navi from "./Navi";
import React, { Component } from "react";
import NotFound from "./NotFound";
import Detay2 from "./Detay2";
import Duzenle2 from "./Duzenle2";
import Ekle1 from "./Ekle1";
import { Route, Switch } from "react-router-dom";
import Table1 from "./Table1";
import SiralaForm from "./SiralaForm";
import Ara1 from "./Ara1";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: [],
      arananDeger: "", 
    };
  }

  componentDidMount() {
    this.getReports();
  }

  /* getReports = () => {
    fetch("http://localhost:3000/reports")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ reports: data });
      })
      .catch((error) => {
        console.error('Error fetching reports:', error);
      });
  };*/

  getReports = (arananDeger) => {
    fetch("http://localhost:3000/reports")
      .then((response) => response.json())
      .then((data) => {
        // Sort data by the selected field
        data.sort((a, b) => {
          if (a[arananDeger] < b[arananDeger]) {
            return -1;
          }
          if (a[arananDeger] > b[arananDeger]) {
            return 1;
          }
          return 0;
        });
        this.setState({ reports: data });
      })
      .catch((error) => {
        console.error("Error fetching reports:", error);
      });
  };

  deleteData = (idToDelete) => {
    fetch(`http://localhost:3000/reports/${idToDelete}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("Post successfully deleted");
        // Update reports after deletion
        this.setState({
          reports: this.state.reports.filter(
            (report) => report.id !== idToDelete
          ),
        });
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };
  
  render() {
    return (
      <div>
        <Navi />
        <Switch>
          <Route exact path="/">
            <SiralaForm getReports={this.getReports} />

            <Table1 reports={this.state.reports} deleteData={this.deleteData} />
          </Route>
          <Route
            exact
            path="/detay/:id"
            render={(props) => {
              const reportId = props.match.params.id;
              const report = this.state.reports.find(
                (rep) => rep.id === reportId
              );
              return (
                <div style={{ width: "50%" }}>
                  <Detay2
                    getReports={this.getReports}
                    report={report}
                    deleteData={this.deleteData}
                  />
                </div>
              );
            }}
          />
          <Route
            exact
            path="/duzenle/:id"
            render={(props) => {
              const reportId = props.match.params.id;
              const report = this.state.reports.find(
                (rep) => rep.id === reportId
              );
              return (
                <div style={{ width: "50%" }}>
                  <Duzenle2
                    report={report}
                    getReports={this.getReports}
                    deleteData={this.deleteData}
                  />
                </div>
              );
            }}
          />
          <Route
            exact
            path="/ekle/"
            render={(props) => {
              return (
                <div style={{ width: "50%" }}>
                  <Ekle1
                    getReports={this.getReports}
                    reports={this.state.reports}
                    deleteData={this.deleteData}
                  />
                </div>
              );
            }}
          />
          <Route
            exact
            path="/ara/"
            render={(props) => {
              return (
                <div style={{ width: "50%" }}>
                  <Ara1
                    deleteData={this.deleteData}
                  />
                </div>
              );
            }}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
