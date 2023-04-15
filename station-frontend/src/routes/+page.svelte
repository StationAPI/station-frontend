<script>
  import hero1 from "$lib/assets/hero.svg";
  import hero2 from "$lib/assets/hero-2.svg";
</script>

<div class="hero min-h-min bg-base-200 mt-6" style="background-color: #473E4E;">
  <div class="hero-content flex-col lg:flex-row">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src={hero1} alt="Hero Image" height="1000" width="1000" />
    <div class="text-primary-content">
      <h1 class="text-5xl font-bold">Grow Your Website</h1>
      <h2 class="py-6 text-3xl">
        Grow Your Audience with Station's Discoverability Tools
      </h2>
      <button class="btn btn-primary" style="background-color: #997CDA;"
        >Start Sharing</button
      >
    </div>
  </div>
</div>

<div class="artboard artboard-horizontal phone-5 mx-auto">
  <div class="flex flex-col w-full lg:flex-row" />
  <div
    class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center border-8 border-purple-400"
  >
    content
  </div>
  <div class="divider" />
  <div
    class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center border-8 border-purple-400"
  >
    content
  </div>
</div>

<div class="hero min-h-min bg-base-200 mt-6" style="background-color: #473E4E;">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src={hero2} alt="Hero Image" height="1000" width="1000" />
    <div class="text-primary-content">
      <h1 class="text-5xl font-bold">Find Your New Favorite Platform</h1>
      <p class="py-6 text-3xl">
        Discover the Web's Best with Station's Detailed Filters.
      </p>
      <button class="btn btn-primary" style="background-color: #997CDA;"
        >Find Websites</button
      >
    </div>
  </div>
</div>
