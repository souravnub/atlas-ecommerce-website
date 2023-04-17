export default async function fetchCountries() {
    const res = await fetch(
        "https://countriesnow.space/api/v0.1/countries/iso"
    );
    const jsonRes = await res.json();

    const formatted_countries = jsonRes.data?.map(({ name, Iso2 }) => ({
        label: name,
        value: Iso2,
    }));

    return formatted_countries;
}
