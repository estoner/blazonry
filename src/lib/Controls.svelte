<script lang="ts">
  import { divisions, tinctures } from './store';
  import { currentDivision, chosenTinctures } from './store';
</script>
  
{#each $chosenTinctures as chosenTincture, index}
  <label for={'tincture' + index}>Tincture {index}:</label>
  <select bind:value={$chosenTinctures[index]} >
    {#each tinctures as tincture, n}
      <option value={n}>{tincture.name}</option>
    {/each}
  </select>
{/each}

<label for="currentDivision">Division:</label>
<select bind:value={$currentDivision} >
  {#each divisions as d, n}
    <option value={n}>{d.name}</option>
  {/each}
</select>


<style>

</style>
