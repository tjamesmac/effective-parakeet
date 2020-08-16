import { useQuery } from './index';

async function fet() {
  return {
    ok: true,
    status: 200,
    json: async () => ({ hello: 'world' })
  };
}

const HookTester = ({ hook }) => {
  hook();
  return null;
};

describe('Query', () => {
  beforeEach(() => (global.fetch = jest.fn().mockImplementation(() => fet())));
  //   afterEach(() => global.fetch.mockClear())

  it('should perform a query', () => {
    const query = useQuery();
    expect(global.fetch).toHaveBeenCalled();
  });
});
