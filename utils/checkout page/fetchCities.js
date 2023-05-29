import axios from "axios";
import { useQuery } from "react-query";

export default ({ enabled, selectedStateProps }) => {
    return useQuery(
        [selectedStateProps?.country, selectedStateProps?.state, "cities"],
        async () => {
            const res = await axios.post(
                "https://countriesnow.space/api/v0.1/countries/state/cities",
                {
                    country: selectedStateProps?.country,
                    state: selectedStateProps?.state,
                }
            );
            return res.data.data.map((city) => ({ label: city, value: city }));
        },
        {
            enabled,
            refetchOnWindowFocus: false,
        }
    );
};
