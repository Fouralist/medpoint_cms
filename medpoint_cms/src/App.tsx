import React, { useEffect, useState } from "react";
  import { createClient } from "@supabase/supabase-js";

  const supabase = createClient(
    "https://okfiiamqfgxgutsyrdux.supabase.co", 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rZmlpYW1xZmd4Z3V0c3lyZHV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzMjY3MjAsImV4cCI6MjA1MTkwMjcyMH0.cloETRUCZ9TRgy5UqBCA8ToGR0hOXBDuU5nQSEcvQRU");

  function App() {
    const [countries, setCountries] = useState<{ name: string }[]>([]);

    useEffect(() => {
      getCountries();
    }, []);

    async function getCountries() {
      const { data } = await supabase.from("countries").select();
      if (data) {
        setCountries(data);
      }
    }

    return (
      <ul>
        {countries.map((country) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul>
    );
  }

  export default App;


// import React from 'react';
// // import logo from './lg1.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
