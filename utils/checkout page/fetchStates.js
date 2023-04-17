export default async function (countryIso) {
    const res = await fetch(
        "https://countriesnow.space/api/v0.1/countries/states",
        {
            method: "POST",
            body: JSON.stringify({
                iso2: countryIso,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    const jsonRes = await res.json();

    const formattedStates = jsonRes.data.states.map(({ name }) => ({
        label: name,
        value: { country: jsonRes.data.name, state: name },
    }));

    return formattedStates;
}
