import { useState, useEffect } from 'react';

export const url = 'https://old.reddit.com/r/all.json';

export const useQuery = (searchTerm?: string) => {
  const [query, setQuery] = useState(null);

  useEffect(() => {
    const callQuery = async query => {
      const data = await fetch(query);
      const result = await data.json();
      return result;
    };
    try {
      const data = callQuery(url);
      setQuery(data);
    } catch (error) {
      console.error(error);
    }
  }, [searchTerm]);

  return [query, setQuery];
};
