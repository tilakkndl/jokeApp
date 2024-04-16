// import { useEffect, useState } from "react";
// const fetchAPI = (url, method="GET", payload=null) => {
//   // const [isPending, setPending] = useState(true);
//   // const [data, setData] = useState(null);
//   // const [error, setError] = useState(null);

//   // useEffect(() => {
//     const abortCont = new AbortController();
//     // setTimeout(() => {
//       const options = {
//         method,
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         signal: abortCont.signal,
//       };

//       if (payload) {
//         options.body = JSON.stringify(payload);
//       }

//       fetch(url, options)
//         .then((res) => {
//           if (!res.ok) {
//             throw Error("Couldn't load the resource");
//           }
//           return res.json();
//         })
//         .then((data) => {
//           setData(data);
//           setPending(false);
//           setError(null);
//         })
//         .catch((err) => {
//           if (err.name === "AbortError") {
//             console.log("Fetch aborted");
//           } else {
//             setError(err.message);
//             setPending(false);
//           }
//         });
//     // }, 1000);
//     return () => abortCont.abort();
//   // }, [url]);

//   return { data, isPending, error };
// };

// export default fetchAPI;


const fetchAPI = async(url, method="GET", payload=null) => {
  let data=[];
  let error="";

  try {
    
 


    // const abortCont = new AbortController();
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        // signal: abortCont.signal,
      };

      if (payload) {
        options.body = JSON.stringify(payload);
      }
      const response = await fetch(url, options);
      if(!response.ok){
        error = "Couldn't load the resource";
        data = null
        return ;
      }

      data = await response.json();
    } catch (err) {
  
        data = null
        error = "Error fetching data"
    
     
    
    }
  
      


  return { data, error };
};

export default fetchAPI;