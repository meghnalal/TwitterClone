import React, { useEffect, useState } from 'react';
import { getVersion } from '../Libs/BeatriceVersion';
import delay from '../Utils/delay';

/**
* Function to update fetch options with standard headers
*
* @param options options to be applied to the query
* @returns modified options
*/
export function updateOptions(options) {
   const update = { ...options };
   update.headers = {
       ...update.headers,
       'Beatrice-Version': getVersion(),
   };
   return update;
}

/**
* Function to handle errors returned from fetch
*
* @param url url to be queried
* @param options options to be applied to the query
* @returns a fetch response
*/
export const runFetch = async (url, options) => {
   let resp = await fetch(url, updateOptions(options));

   while (resp.status === 429) {
       const seconds = resp.headers.get('Retry-After');
       await delay(parseInt(seconds ? seconds + '000' : '5000'));
       resp = await runFetch(url, options);
   }

   return resp;
};

const useFetch = (url, options) => {
   const [response, setResponse] = useState();

   useEffect(() => {
       if (url) {
           runFetch(url, options).then((resp) => {
               setResponse(resp);
           });
       }
   }, []);

   return [response];
};

export default useFetch;
