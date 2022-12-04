<script lang="ts">

  // TINCTURES
  let chosenTinctures: number[] = [0,0,0,0]
  let currentTincture: number = 0
  let secondTincture: number = 0
  const incrementTincture = () => {
    console.log("incrementing first tincture")
    if (chosenTinctures[0] == tinctures.length-1) {
      chosenTinctures[0] = 0
    } else {
      chosenTinctures[0] += 1
    }
    console.log(chosenTinctures)
  }
  const incrementSecondTincture = () => {
    console.log("incrementing second tincture")
    if (chosenTinctures[1] == tinctures.length-1) {
      chosenTinctures[1] = 0
    } else {
      chosenTinctures[1] += 1
    }
    console.log(chosenTinctures)
  }
  const incrementThirdTincture = () => {
    console.log("incrementing third tincture")
    if (chosenTinctures[2] == tinctures.length-1) {
      chosenTinctures[2] = 0
    } else {
      chosenTinctures[2] += 1
    }
    console.log(chosenTinctures)
  }
  const incrementFourthTincture = () => {
    console.log("incrementing fourth tincture")
    if (chosenTinctures[3] == tinctures.length-1) {
      chosenTinctures[3] = 0
    } else {
      chosenTinctures[3] += 1
    }
    console.log(chosenTinctures)
  }
  type TinctureType = {
    name: string;
    hexcode: string;
  }
  const tinctures: TinctureType[]  = [
    { name: 'Argent', hexcode: '#aaa' },
    { name: 'Azure', hexcode: '#009' },
    { name: 'Gules', hexcode: '#900' },
    { name: 'Or', hexcode: '#ffd700'},
    { name: 'Sable', hexcode: '#000' },
    { name: 'Purpure', hexcode: '#909' },
    { name: 'Vert', hexcode: '#090' }
  ]
  // TODO: Add other tinctures

  //TODO: Divisions
  let currentDivision: number = 0
  type DivisionType = {
    name: string;
    parts: Array<string>;
    cssClass: string;
  }
  const incrementDivision = () => {
    if (currentDivision == divisions.length-1) {
      currentDivision = 0
    } else {
      currentDivision += 1
    }
  }
  const divisions: DivisionType[] = [
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
      parts: ["sinister-chief","dexter-chief","sinister-base","dexter-base"]
    },
    // TODO { name: "Per Gyronny", [] },
  ]

  //TODO: Major Ordinaries
  //TODO: Weirder Divisions (3-part, barry)
  //TODO: Charges
  //TODO: Treatments & Furs
  //TODO: Lines of division
  //TODO: Weirder Charges
  //TODO: Shapes


</script>



<div class="shield" >
  <div class={divisions[currentDivision].cssClass}>
    {#each divisions[currentDivision].parts as part, index}
      <div class={part} style="background-color: {tinctures[chosenTinctures[index]].hexcode}" >{part}</div>
    {/each}
  </div>
</div>

<button on:click={ incrementTincture } style="background-color: {tinctures[chosenTinctures[0]].hexcode}" >
  { tinctures[chosenTinctures[0]].name }
</button>
<button on:click={ incrementSecondTincture } style="background-color: {tinctures[chosenTinctures[1]].hexcode}" >
  { tinctures[chosenTinctures[1]].name }
</button>
<button on:click={ incrementThirdTincture } style="background-color: {tinctures[chosenTinctures[2]].hexcode}" >
  { tinctures[chosenTinctures[2]].name }
</button>
<button on:click={ incrementFourthTincture } style="background-color: {tinctures[chosenTinctures[3]].hexcode}" >
  { tinctures[chosenTinctures[3]].name }
</button>
<button on:click={ incrementDivision } >
  { divisions[currentDivision].name }
</button>

<style>
  .shield {
    height: 400px;
    width: 400px;
    border: 10px groove black;
    border-radius: 0% 0% 75% 75% / 0% 0% 88% 88%;
    overflow: hidden;
  }
  .undivided {
    margin: 0;
    height: 100%;
    width: 100%;
  }
  .only {
    margin: 0;
    height: 100%;
    width: 100%;
  }
  .per-pale {
    margin: 0;
    height: 100%;
    display: flex;
  }
  .per-pale-dexter {
    margin: 0;
    width: 50%;
  }
  .per-pale-sinister {
    margin: 0;
    width: 50%;
  }
  .per-fess {
    margin: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .per-fess-chief {
    height: 50%
  }
  .per-fess-base {
    height: 50%
  }
  .per-bend{
    margin: 0;
    height: 145%;
    width: 140%;
    display: flex;
    flex-direction: column;
    transform: translateY(-1.75%) rotate(45deg) translateX(-25%)
  }
  .per-bend-sinister-chief {
    margin:0;
    height: 50%;
  }
  .per-bend-dexter-base {
    margin:0;
    height: 50%;
  }
  .per-bend-sinister {
    margin: 0;
    height: 145%;
    width: 140%;
    display: flex;
    flex-direction: column;
    transform: translateY(-29.25%) rotate(-45deg) translateX(-12%)
  }
  .per-bend-sinister-dexter-chief {
    margin:0;
    height: 50%;
  }
  .per-bend-sinister-sinister-base {
    margin:0;
    height: 50%;
  }
  .per-chevron {
    margin: 0;
    height: 100%;
    width: 100%;
    position: relative;
  }
  .per-chevron-chief {
    height:100%
  }
  .per-chevron-base {
    height:100%;
    transform:  translateY(-29%) rotate(45deg);
  }
  .quarterly {
    margin: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
  }
  .quarterly > div {
    height: 50%;
    width: 50%;
  }
  .quarterly > .dexter-chief {

  }
</style>
