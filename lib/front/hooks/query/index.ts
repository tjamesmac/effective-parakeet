import { useState, useEffect } from 'react';

export const url: string = 'https://old.reddit.com/r/all.json';

export const useQuery = (searchTerm?: string) => {
  const [query, setQuery] = useState(null);

  useEffect(() => {
    const callQuery = async (query: string) => {
      const data = await fetch(query);
      const result = await data.json();
      return setQuery(result);
    };
    try {
      callQuery(url);
    } catch (error) {
      console.error(error);
    }
  }, [searchTerm]);

  return [query, setQuery];
};
