import { IFetchAPICall, IFilter } from '@/types';
import { API_BASE_URL } from '@/utils/constants';

const useAPI = () => {
  const http = async (path: string, options?: IFetchAPICall) => {
    const url = `${API_BASE_URL}/${path.replace(/^\/+/, '')}`;

    try {
      const raw = await fetch(url, {
        method: options?.method ?? 'GET',
        body: options?.data ? JSON.stringify(options.data) : undefined,
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = (await raw.json()) as any;
      if (!raw.ok) throw new Error(data.message);
      return data;
    } catch (error) {
      throw error;
    } finally {
    }
  };

  const getBlogs = async ({ offSet, limit }: IFilter) => {
    return http(`?offset=${offSet}&limit=${limit}`);
  };

  return {
    getBlogs
  };
};

export default useAPI;
