<script>
  import hero1 from "$lib/assets/hero.svg";
  import hero2 from "$lib/assets/hero-2.svg";
</script>

<div
  class="hero min-h-min bg-base-200 mt-6"
  style="background: rgb(76,29,149);
background: linear-gradient(90deg, rgba(76,29,149,1) 0%, rgba(94,66,142,1) 38%, rgba(96,60,176,1) 63%, rgba(83,22,222,1) 100%);"
>
  <div
    class="hero-content flex-col lg:scale-100 lg:flex-row-reverse sm:scale-75"
  >
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img
      class="object-contain md:max-w-3xl rounded-lg"
      src={hero2}
      alt="Hero Image"
    />
    <div class="text-primary-content text-center">
      <h1 class="text-5xl font-bold">Find Your New Favorite Platform</h1>
      <p class="py-6 text-3xl">
        Discover the Web's Best with Station's Detailed Filters.
      </p>
      <button
        class="btn btn-primary"
        style="background-color: #4c1d95; border-color: #4c1d95;"
        >Find Websites</button
      >
    </div>
  </div>
</div>

<div class="flex justify-center">
  <div
    class="card border bg-violet-900 border-white border--8 white lg:w-1/3 mt-10 mx-5 mb-10"
  >
    <div
      class="text-white flex flex-col gap-10 justify-center px-4 py-16 card-body"
    >
      <div class="card-title justify-center">
        <div class="stack">
          <div
            class="text-center border border-white-content card lg:w-64 w-48 bg-violet-700"
          >
            <div class="card-body">
              <div class="flex-col">
                <span class="badge bg-violet-500 border-purple-500 text-white"
                  >Cloud</span
                >
                <span class="badge bg-violet-500 border-purple-500 text-white"
                  >Kubernetes</span
                >
                <span class="badge bg-violet-500 border-purple-500 text-white"
                  >Containers</span
                >
              </div>
            </div>
          </div>
          <div
            class="text-center border border-white-content card lg:w-64 w-48 bg-violet-800"
          >
            <div class="card-body">B</div>
          </div>
          <div
            class="text-center border border-white-content card lg:w-64 w-48 bg-violet-900"
          >
            <div class="card-body">C</div>
          </div>
        </div>
      </div>
      <p class="text-center font-bold">
        Browse New Websites That Match Filters You Choose
      </p>
    </div>
  </div>
</div>

<div
  class="hero min-h-min bg-base-200 mt-6"
  style="background: rgb(76,29,149);
background: linear-gradient(90deg, rgba(76,29,149,1) 0%, rgba(94,66,142,1) 38%, rgba(96,60,176,1) 63%, rgba(83,22,222,1) 100%);"
>
  <div class="hero-content flex-col lg:flex-row">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img
      class="object-contain md:max-w-3xl sm:px-5"
      src={hero1}
      alt="Hero Image"
    />
    <div class="text-primary-content text-center px-5">
      <h1 class="text-5xl font-bold">Grow Your Website</h1>
      <h2 class="py-6 text-3xl">
        Grow Your Audience with Station's Discoverability Tools
      </h2>
      <button
        class="btn btn-primary"
        style="background-color: #4c1d95; border-color:#4c1d95;"
        >Upload Your Site</button
      >
    </div>
  </div>
</div>
