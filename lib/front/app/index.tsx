import * as React from 'react';
// import { useEffect, useState } from 'react';

const App = () => {
  //   const [data, setData] = useState(null);
  //   useEffect(() => {
  //     const getData = async () => {
  //       const response = await fetch();
  //       return await response.json();
  //     };
  //     getData().then(data => setData(data));
  //   }, []);
  return (
    <>
      <div>Hello world yeah!</div>
      {/* <ul>
        {data &&
          data.data.children.map((item, key) => {
            return <li key={key}>{item.data.title}</li>;
          })}
      </ul> */}
    </>
  );
};

export { App };
