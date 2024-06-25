import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import '@mantine/core/styles.css';
import Navi from './Navi';
import NotFound from './NotFound';
import Detay2 from './Detay2';
import Duzenle2 from './Duzenle2';
import Ekle1 from './Ekle1';
import SiralaForm from './SiralaForm';
import Ara1 from './Ara1';
import { useGetAllReportQuery, useDeleteReportMutation, useAddReportMutation } from './services/report';

const App = () => {
  const { data, error, isLoading } = useGetAllReportQuery();
  const [deleteReport] = useDeleteReportMutation();
  const [addReport] = useAddReportMutation();
  const [reports, setReports] = React.useState([]);
  const [arananDeger, setArananDeger] = React.useState('');

  React.useEffect(() => {
    if (data) {
      const sortedData = [...data].sort((a, b) => {
        if (a[arananDeger] < b[arananDeger]) {
          return -1;
        }
        if (a[arananDeger] > b[arananDeger]) {
          return 1;
        }
        return 0;
      });
      setReports(sortedData);
    }
  }, [data, arananDeger]);

  const handleDelete = async (idToDelete) => {
    try {
      await deleteReport(idToDelete).unwrap();
      console.log('Post successfully deleted');
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleAdd = async (newData) => {
    try {
      await addReport(newData).unwrap();
      console.log('Post successfully added');
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <div>
      <div className="App">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : null}
      </div>
      <Navi />
      <Switch>
        <Route exact path="/">
          <SiralaForm deleteData={handleDelete} />
        </Route>
        <Route
          exact
          path="/detay/:id"
          render={(props) => {
            const reportId = props.match.params.id;
            const report = reports.find((rep) => rep.id === reportId);
            return (
              <div style={{ width: '50%' }}>
                <Detay2
                  
                  report={report}
                  deleteData={handleDelete}
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
            const report = reports.find((rep) => rep.id === reportId);
            return (
              <div style={{ width: '50%' }}>
                <Duzenle2
                  report={report}
                  deleteData={handleDelete}
                />
              </div>
            );
          }}
        />
        <Route
          exact
          path="/ekle/"
          render={(props) => (
            <div style={{ width: '50%' }}>
              <Ekle1
                handleAdd={handleAdd}
                
                deleteData={handleDelete}
                reports={reports} 
              />
            </div>
          )}
        />
        <Route
          exact
          path="/ara/"
          render={(props) => (
            <div style={{ width: '50%' }}>
              <Ara1 deleteData={handleDelete} />
            </div>
          )}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
