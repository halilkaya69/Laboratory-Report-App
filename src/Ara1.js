import React, { useState } from 'react';
import '@mantine/core/styles.css';

import Table1 from './Table1';
import { useFindReportQuery } from './services/report';
import { Button, Select, TextInput } from "@mantine/core";

const Ara1 = (props) => {
  //const [reports, setReports] = useState([]);
  const [arananDeger, setArananDeger] = useState(''); 
  const [arananDeger2, setArananDeger2] = useState('');

  // RTK Query hooks
  const { data: reportData, error: reportError, refetch: refetchReport } = useFindReportQuery({ arananDeger, arananDeger2 });

  const handleSearch = (e) => {
    e.preventDefault();
    refetchReport({ arananDeger, arananDeger2 });
  };

  const handleChange = (value) => {
    setArananDeger(value);
  };

  const handleChange2 = (event) => {
    const { value } = event.target;
    setArananDeger2(value);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSearch}>
          <Select
            label="Rapor ara"
            placeholder="Pick value"
            value={arananDeger}
            onChange={handleChange}
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
            label="Aranan Değer"
            name="laborantAd"
            type="text"
            id="laborantAd"
            value={arananDeger2}
            onChange={handleChange2}
          />
          <Button type="submit" fullWidth>
            Ara
          </Button>
        </form>
        <Table1 reports={reportData || []} deleteData={props.deleteData}/>
      </div>
    </div>
  );
};

export default Ara1;
