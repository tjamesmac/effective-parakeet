import * as React from 'react';
//@ts-ignore
import { render, act } from '@testing-library/react';
import { useQuery, url } from './index';

const mockResponse = async () => {
  return {
    ok: true,
    status: 200,
    json: async () => ({ hello: 'world' })
  };
};

const HookTester = ({ hook }) => {
  hook();
  return null;
};

describe('Query', () => {
  beforeEach(
    () => (global.fetch = jest.fn().mockImplementation(() => mockResponse()))
  );

  it('should perform a query', async () => {
    await act(async () => {
      render(<HookTester hook={useQuery} />);
    });

    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledWith(url);
  });
});
