import axios from "axios";
import { useQuery } from "react-query";

export default ({ countryIso, enabled }) => {
    return useQuery(
        [countryIso, "states"],
        async () => {
            const res = await axios.post(
                "https://countriesnow.space/api/v0.1/countries/states",
                {
                    iso2: countryIso,
                }
            );
            console.log(res);
            return res.data.data.states.map(({ name }) => ({
                label: name,
                value: { country: res.data.data.name, state: name },
            }));
        },
        {
            enabled,
            refetchOnWindowFocus: false,
        }
    );
};
