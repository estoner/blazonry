import { writable } from 'svelte/store'

type TinctureType = {
    name: string;
    hexcode: string;
}
// TINCTURES
export const tinctures: TinctureType[]  = [
    { name: 'Argent', hexcode: '#aaa' },
    { name: 'Azure', hexcode: '#009' },
    { name: 'Gules', hexcode: '#900' },
    { name: 'Or', hexcode: '#ffd700'},
    { name: 'Sable', hexcode: '#000' },
    { name: 'Purpure', hexcode: '#909' },
    { name: 'Vert', hexcode: '#090' }
]

type DivisionType = {
    name: string;
    parts: Array<string>;
    cssClass: string;
}
export const divisions: DivisionType[] = [
    {
        name: "Undivided",
        cssClass: "undivided",
        parts: ["only"]
    },
    {
        name: "Per Pale",
        cssClass: "per-pale",
        parts: ["per-pale-dexter", "per-pale-sinister"]
    },
    {
        name: "Per Fess",
        cssClass: "per-fess",
        parts: ["per-fess-chief", "per-fess-base"]
    },
    {
        name: "Per Bend",
        cssClass: "per-bend",
        parts: ["per-bend-sinister-chief", "per-bend-dexter-base" ]
    },
    {
        name: "Per Bend Sinister",
        cssClass: "per-bend-sinister",
        parts: ["per-bend-sinister-dexter-chief", "per-bend-sinister-sinister-base"]
    },
    {
        name: "Per Chevron",
        cssClass: "per-chevron",
        parts: ["per-chevron-chief","per-chevron-base"]
    },
    {
        name: "Per Saltire",
        cssClass: "per-saltire",
        parts: ["chief","sinister","base","dexter"]
    },
    {
        name: "Quarterly",
        cssClass: "quarterly",
        parts: ["dexter-chief","sinister-chief","dexter-base","sinister-base"]
    },
    {
        name: "Gyronny",
        cssClass: "gyronny",
        parts: ["dexter-chief","sinister-chief","dexter-base","sinister-base"]
    },
    // TODO { name: "Per Gyronny", [] },
]

export let chosenTinctures = writable([0,0,0,0])
export let chosenDivision = writable(0)