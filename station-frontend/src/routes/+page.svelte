<script>
  import hero1 from "$lib/assets/hero.svg";
  import hero2 from "$lib/assets/hero-2.svg";
</script>

<div
  class="hero min-h-min bg-base-200 mt-6"
  style="background: rgb(87,73,99);
background: linear-gradient(90deg, rgba(87,73,99,1) 0%, rgba(105,75,129,1) 32%, rgba(128,69,180,1) 63%, rgba(132,24,227,1) 100%);"
>
  <div class="hero-content flex-col lg:flex-row-reverse">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src={hero2} alt="Hero Image" height="1000" width="1000" />
    <div class="text-primary-content">
      <h1 class="text-5xl font-bold">Find Your New Favorite Platform</h1>
      <p class="py-6 text-3xl">
        Discover the Web's Best with Station's Detailed Filters.
      </p>
      <button
        class="btn btn-primary"
        style="background-color: #997CDA; border-color: #997CDA;"
        >Find Websites</button
      >
    </div>
  </div>
</div>

<div
  class="hero min-h-min bg-base-200 mt-6"
  style="background: rgb(87,73,99);
background: linear-gradient(90deg, rgba(87,73,99,1) 0%, rgba(105,75,129,1) 32%, rgba(128,69,180,1) 63%, rgba(132,24,227,1) 100%);"
>
  <div class="hero-content flex-col lg:flex-row">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src={hero1} alt="Hero Image" height="1000" width="1000" />
    <div class="text-primary-content">
      <h1 class="text-5xl font-bold">Grow Your Website</h1>
      <h2 class="py-6 text-3xl">
        Grow Your Audience with Station's Discoverability Tools
      </h2>
      <button
        class="btn btn-primary"
        style="background-color: #997CDA; border-color:#997CDA;"
        >Start Sharing</button
      >
    </div>
  </div>
</div>
