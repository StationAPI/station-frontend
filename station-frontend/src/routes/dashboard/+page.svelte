<script>
  import analytics from "$lib/assets/analytics.svg";
</script>

<div
  class="my-10 flex justify-center flex-col lg:flex-row gap-3"
>
  <div class="card w-96 bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
      <img
        src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
        alt="Upload"
        class="rounded-xl"
      />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">Upload</h2>
      <p>Upload a new website</p>
      <div class="card-actions">
        <button class="btn btn-primary">Go There</button>
      </div>
    </div>
  </div>

  <div class="card w-96 bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
      <img
        src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
        alt="Shoes"
        class="rounded-xl"
      />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions">
        <button class="btn btn-primary">Go There</button>
      </div>
    </div>
  </div>

  <div class="card w-96 bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
      <img src={analytics} alt="Analytics" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">Analytics</h2>
      <p>View Your Site's Analytics</p>
      <div class="card-actions">
        <button class="btn btn-primary">Go There</button>
      </div>
    </div>
  </div>
</div>
