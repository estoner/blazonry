<script lang="ts">
  import { divisions, tinctures } from './store';
  import { currentDivision, chosenTinctures } from './store';
  
    const incrementTincture = () => {
      console.log("incrementing first tincture")
      if ($chosenTinctures[0] == tinctures.length-1) {
        $chosenTinctures[0] = 0
      } else {
        $chosenTinctures[0] += 1
      }
    }
    const incrementSecondTincture = () => {
      console.log("incrementing second tincture")
      if ($chosenTinctures[1] == tinctures.length-1) {
        $chosenTinctures[1] = 0
      } else {
        $chosenTinctures[1] += 1
      }
    }
    const incrementThirdTincture = () => {
      console.log("incrementing third tincture")
      if ($chosenTinctures[2] == tinctures.length-1) {
        $chosenTinctures[2] = 0
      } else {
        $chosenTinctures[2] += 1
      }
    }
    const incrementFourthTincture = () => {
      console.log("incrementing fourth tincture")
      if ($chosenTinctures[3] == tinctures.length-1) {
        $chosenTinctures[3] = 0
      } else {
        $chosenTinctures[3] += 1
      }
    }
    const incrementDivision = () => {
      if ($currentDivision == divisions.length-1) {
        $currentDivision = 0
      } else {
        $currentDivision += 1
      }
    }

  </script>
  
  <button on:click={ incrementTincture } style="background-color: {tinctures[$chosenTinctures[0]].hexcode}" >
    { tinctures[$chosenTinctures[0]].name }
  </button>
  <button on:click={ incrementSecondTincture } style="background-color: {tinctures[$chosenTinctures[1]].hexcode}" >
    { tinctures[$chosenTinctures[1]].name }
  </button>
  <button on:click={ incrementThirdTincture } style="background-color: {tinctures[$chosenTinctures[2]].hexcode}" >
    { tinctures[$chosenTinctures[2]].name }
  </button>
  <button on:click={ incrementFourthTincture } style="background-color: {tinctures[$chosenTinctures[3]].hexcode}" >
    { tinctures[$chosenTinctures[3]].name }
  </button>
  <button on:click={ incrementDivision } >
    { divisions[$currentDivision].name }
  </button>
  
  <style>
  
  </style>
  