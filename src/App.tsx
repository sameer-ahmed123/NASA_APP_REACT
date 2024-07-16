import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
function App() {
  const [Data, setData] = useState(null);
  // const [loading, setloading] = useState(false);
  const [ShowModal, setShowModal] = useState(false);
  function handleToggleModal() {
    setShowModal(!ShowModal);
  }
  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
  // fetch data from an api using useEffect
  useEffect(() => {
    async function fetchApiData() {
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;

      const today = new Date().toDateString();
      const localKey: string = `nasa-${today}`;
      const localData: any = localStorage.getItem(localKey);
      if (localData) {
        const apiData = JSON.parse(localData);
        setData(apiData);
        console.log("fetched data from cache");
        return;
      }
      localStorage.clear();

      try {
        const res = await fetch(url);
        const apiData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        console.log("fetched from api today");
      } catch (err: any) {
        console.log(err.message);
      }
    }
    fetchApiData();
  }, []);
  return (
    <>
      {Data ? (
        <Main data={Data} />
      ) : (
        <div className="loading">
          <i className="fa-solid fa-spinner"></i>
        </div>
      )}
      {ShowModal && (
        <Sidebar data={Data} handleToggleModal={handleToggleModal} />
      )}
      {Data && <Footer data={Data} handleToggleModal={handleToggleModal} />}
    </>
  );
}

export default App;
