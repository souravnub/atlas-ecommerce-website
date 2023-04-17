export default async function ({ country, state }) {
    const res = await fetch(
        "https://countriesnow.space/api/v0.1/countries/state/cities",
        {
            method: "POST",
            body: JSON.stringify({
                country,
                state,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    const jsonRes = await res.json();
    const formatted_cities = jsonRes.data.map((city) => ({
        label: city,
        value: city,
    }));
    return formatted_cities;
}
