<script lang="ts">
  import { fade } from 'svelte/transition';
  import { divisions, tinctures } from './store';
  import { chosenDivision, chosenTinctures } from './store';
</script>

<div class="shield" >
  {#key $chosenDivision}
    <div class={divisions[$chosenDivision].cssClass} >
      {#each divisions[$chosenDivision].parts as part, index}
        <div class={part} style="background-color: {tinctures[$chosenTinctures[index]].hexcode}" >{part}</div>
      {/each}
    </div>
  {/key}
</div>

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
  .per-saltire {
    margin: 0;
    height: 150%;
    width: 150%;
    display: flex;
    flex-flow: row wrap;
    transform: translateX(-16.5%) translateY(-16.5%) rotate(-45deg);
  }
  .per-saltire > div {
    margin: 0;
    height: 50%;
    width: 50%;
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
</style>
