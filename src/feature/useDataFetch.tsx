import { useEffect, useState } from "react";

type DataFetchProps = {
    fetchUrl: string;
};

export default function useDataFetch({ fetchUrl }: DataFetchProps) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(fetchUrl);
                console.log(response);
                const result = await response.json();
                console.log(result);
                setData(result);
            } catch (err) {
                console.error(err);
                setData(null);
            }
        };

        fetchData();
    }, [fetchUrl]);

    return data;
}
