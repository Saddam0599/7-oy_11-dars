import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const BASE_URL = "https://66f8f3612a683ce973107f6f.mockapi.io/api";

function useFetchData(endpoint) {
    return useQuery({
        queryKey: ['fetchData', endpoint],
        queryFn: () => axios.get(BASE_URL + endpoint).then(res => res.data),
        refetchOnWindowFocus: false,
    });
}

export default useFetchData;
