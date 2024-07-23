import { useState, useEffect } from 'react';
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from 'react-router-dom'
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Contacts from "./scenes/contacts";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import BarChart from './components/BarChart';
import './App.css';

function App() {
  const [theme, colorMode] = useMode();
  const [data, setData] = useState([]);
  const [countrydata, setCountryData] = useState([]);
  const [sectordata, setSectorData] = useState([]);
  const [regiondata, setRegionData] = useState(0);
  const [topicdata, setTopicData] = useState(0);
  const [intensitydata, setIntensityData] = useState([]);
  const [relevance, setRelevance] = useState([]);
  const [likelihood, setLikelihood] = useState([]);

  useEffect(() => {
    const getTaskData = async () => {

      const response = await fetch('/displaydata');
      const resdata = await response.json();
      setData(resdata.data);
      console.log(data);
      let namesArray = data.map(item => item.sector);
      setSectorData(namesArray)
      console.log("sectordata", sectordata)
      let intendata = data.map(item => item.intensity);
      setIntensityData(intendata);
      let country = data.map(item => item.country);
      setCountryData(country);
      let reldata = data.map(item => item.relevance);
      setRelevance(reldata);
      let topic = data.map(item => item.topic);
      setTopicData(topic);
      let likeli = data.map(item => item.likelihood);
      setLikelihood(likeli);
    }

    getTaskData();
  }, [data]);
  console.log(data);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <div className="fixed"><Sidebar /></div>
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard data={data} countrydata={countrydata} sectordata={sectordata} topicdata={topicdata}  relevance={relevance} intensitydata={intensitydata} likelihood={likelihood} />} />
              <Route path="/dash" element={<Dashboard data={data} countrydata={countrydata} sectordata={sectordata} topicdata={topicdata}  relevance={relevance} intensitydata={intensitydata} likelihood={likelihood} />} />
              <Route path="/contacts" element={<Contacts data={data} />} />
              <Route path="/bar" element={<BarChart data={data} sectordata={sectordata} intensitydata={intensitydata} />} />
              <Route path="/line" element={<Line relevance={relevance} countrydata={countrydata} />} />
              <Route path="/pie" element={<Pie countrydata={countrydata} likelihood={likelihood} />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
