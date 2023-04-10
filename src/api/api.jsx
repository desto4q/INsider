let api_key = "6432835bb255422f68bea58c";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

export const queryClient = new QueryClient()



export let Provider = ({child}) =>{
    return(
        <QueryClientProvider client={queryClient}>
            {child}
        </QueryClientProvider>
    )
}

import { createClient } from 'pexels';

export const client = createClient('WStDJWqD19Roy6lguIFypImjyBkYSFBPzhLtw4E3JaSjaQoTrQhMcsim');
export const query = 'Nature';

client.photos.search({ query, per_page: 1 }).then(photos => {console.log(photos)});
