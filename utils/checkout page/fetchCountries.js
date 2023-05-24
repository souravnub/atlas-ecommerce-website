import axios from "axios";
import { useQuery } from "react-query";

export default () => {
    return useQuery(["countries"], async () => {
        const res = await axios.get(
            "https://countriesnow.space/api/v0.1/countries/iso"
        );
        return res.data.data?.map(({ name, Iso2 }) => ({
            label: name,
            value: Iso2,
        }));
    });
};
