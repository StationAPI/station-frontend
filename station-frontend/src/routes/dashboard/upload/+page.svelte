<script>
	import AutoComplete from "simple-svelte-autocomplete"

	/** @type {import('./$types').PageData} */    
	export let data;

	const tags = data.data;

	let selected;

	async function handleClick() {
		function getBase64(file) {
			return new Promise((resolve) => {
				let reader = new FileReader();
				reader.readAsDataURL(file);

				reader.onload = function () {
					resolve(reader.result);
				};

				reader.onerror = function (error) {
					console.log("Error: ", error);
				};
			});
		}

		const file = document.getElementById("file");
		const name = document.getElementById("name")
		const description = document.getElementById("description");

		const b64 = await getBase64(file.files[0]);

		const res = await fetch(`http://api.statn.dev:3000/api/image/create`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
			body: JSON.stringify({
				image: b64,
			})
		})

		if (res.status !== 200)
			return alert("There was an issue uploading the website.")
	}
</script>

<div class="flex justify-center">
  <div class="card w-96 bg-base-100 shadow-xl">
    <div class="ml-5 mt-5 avatar placeholder">
      <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
        <span class="text-3xl">SITE</span>
      </div>
    </div>

    <div class="card-body">
      <input
				id="file"
        type="file"
        class="mb-5 file-input file-input-bordered w-full max-w-xs"
      />
      <h2 class="card-title">Image</h2>
      <p>Choose an image to represent your site</p>
    </div>
  </div>
  <div class="mx-5 card w-96 bg-base-100 shadow-xl">
    <h1 class="mx-5 mt-5 text-3xl">Name</h1>
    <div class="card-body">
      <input
				id="name"
        type="text"
        placeholder="Your Site's Name"
        class="mb-5 input input-bordered input-lg w-full max-w-xs"
      />
      <h2 class="card-title">Name</h2>
      <p>Enter your site's name</p>
    </div>
  </div>
</div>
<div class="flex justify-center mt-5">
  <div class="card w-96 bg-base-100 shadow-xl">
    <h1 class="mx-5 mt-5 text-3xl">Description</h1>
    <div class="card-body">
      <textarea
				id="description"
        placeholder="Description"
        class="textarea textarea-bordered textarea-lg w-full max-w-xs"
      />
    </div>
  </div>
  <div class="mx-5 card w-96 bg-base-100 shadow-xl">
    <h1 class="mx-5 mt-5 text-3xl">Tags</h1>
    <div class="card-body">
			<AutoComplete items="{tags}" bind:selectedItem="{selected}" multiple="true" />	
			
			<h2 class="card-title">Tags</h2>
			<p>Start typing tags</p>
    </div>
	</div>
</div>
<div class="flex justify-center mt-5">
	<button on:click={handleClick} id="upload" class="btn btn-wide bg-base-100">Upload</button>
</div>
