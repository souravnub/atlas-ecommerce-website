import fetchCities from "@/utils/checkout page/fetchCities";
import fetchCountries from "@/utils/checkout page/fetchCountries";
import fetchStates from "@/utils/checkout page/fetchStates";
import { atom } from "jotai";
import { loadable } from "jotai/utils";

export const selectedCountryIso2Atom = atom(null);
export const countriesAtom = loadable(atom(fetchCountries));

export const selectedStateAtom = atom(null);

export const lodableStateAtom = loadable(
    atom(async (get) => {
        if (get(selectedCountryIso2Atom)) {
            return await fetchStates(get(selectedCountryIso2Atom));
        }
    })
);

export const loadableCitiesAtom = loadable(
    atom(async (get) => {
        if (get(selectedStateAtom)) {
            return await fetchCities(get(selectedStateAtom));
        }
    })
);
