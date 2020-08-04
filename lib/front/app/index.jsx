import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../Theme';

import ListItem from '../components/listItem/ListItem';

const App = () => {
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await fetch('https://www.reddit.com/r/fantasy.json');
  //     return await response.json();
  //   };
  //   getData().then((data) => setData(data));
  // }, []);

  // const linkHandler = (url) => {
  //   // e.preventDefault();
  //   // console.log(e.target);
  //   // const href = e.target.getAttribute("href");
  //   console.log(url + '.json');
  // };

  return (
    <>
      <ThemeProvider theme={theme}>
        <ListItem
          title={'Hello'}
          url={'world.com'}
          selftext={'uh oh selftext'}
        />
      </ThemeProvider>
      {/* <div>Hello world yeah!</div>
      <input />
      <ul>
        {data &&
          data.data.children.map((item, key) => {
            return (
              <li key={key}>
                <a
                  onClick={() => linkHandler(item.data.url)}
                  href={item.data.url}
                >
                  <h2>{item.data.title}</h2>
                  <p>{item.data.selftext}</p>
                </a>
              </li>
            );
          })}
      </ul> */}
    </>
  );
};

export { App };
