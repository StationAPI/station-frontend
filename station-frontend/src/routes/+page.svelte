<script>
  import logo from "$lib/assets/hero.svg";

  console.log(logo);
</script>

<div class="hero min-h-screen bg-base-200" style="background-color: #473E4E;">
  <div class="hero-content flex-col lg:flex-row">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src={logo} alt="Hero Image" height="1000" width="1000" />
    <div class="text-primary-content">
      <h1 class="text-5xl font-bold">Grow Your Website</h1>
      <h2 class="py-6 text-3xl">
        Grow Your Audience with Station's Discoverability Tools
      </h2>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

<div class="flex justify-center">
  <ul class="steps steps-vertical mb-5 text-primary-content">
    <li class="step step-primary">Register</li>
    <li class="step">Upload your Website</li>
    <li class="step">Bump</li>
    <li class="step">Grow your Traffic</li>
  </ul>
</div>
