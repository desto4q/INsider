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
import axios from 'axios';

export const client = createClient('WStDJWqD19Roy6lguIFypImjyBkYSFBPzhLtw4E3JaSjaQoTrQhMcsim');
export const query = 'Nature';



export let fetchPexels = async (search) => {
    console.log("fetching")
    if (search) {
        let res = await client.photos.search({ query, per_page: 50}).then(photos => {
            let ph= [...photos.photos]
            return ph
        });
        console.log(search)
        return(res)
    }
    
    let res = await client.photos.curated({per_page: 50}).then(media => {
        let ph = [...media.photos]
        return ph
        })
    return (res)  
}
