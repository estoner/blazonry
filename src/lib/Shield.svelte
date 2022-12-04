<script lang="ts">

  // TINCTURES
  let currentTincture: number = 0
  let secondTincture: number = 0
  const incrementTincture = () => {
    console.log("incrementing first tincture")
    if (currentTincture == tinctures.length-1) {
      currentTincture = 0
    } else {
      currentTincture += 1
    }
  }
  const incrementSecondTincture = () => {
    console.log("incrementing second tincture")
    if (secondTincture == tinctures.length-1) {
      secondTincture = 0
    } else {
      secondTincture += 1
    }
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
    //{ name: "Per Bend Sinister", cssClass: "per-bend-sinister", parts: ["dexter chief", "sinister base"] },
    //{ name: "Per Chevron", cssClass: "per-chevron", parts: ["chief","base"] },
    //{ name: "Per Saltire", cssClass: "per-saltire", parts: ["chief","sinister","base","dexter"] },
    //{ name: "Per Quarterly", cssClass: "per-quarterly", parts: ["sinister chief","dexter chief","dexter base","sinister base"] },
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
      {#if index == 0}
        <div class={part} style="background-color: {tinctures[currentTincture].hexcode}" >{part}</div>
      {:else}
        <div class={part} style="background-color: {tinctures[secondTincture].hexcode}" >{part}</div>
      {/if}
    {/each}
  </div>
</div>

<button on:click={ incrementTincture } style="background-color: {tinctures[currentTincture].hexcode}" >
  { tinctures[currentTincture].name }
</button>
<button on:click={ incrementSecondTincture } style="background-color: {tinctures[secondTincture].hexcode}" >
  { tinctures[secondTincture].name }
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
</style>
