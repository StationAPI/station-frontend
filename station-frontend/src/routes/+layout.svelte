<script>
  import "../app.css";
</script>

<div class="navbar text-primary-content" style="background-color: #8570A8;">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl" href="/">Home</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><a href="/dashboard">Dashboard</a></li>
    </ul>
  </div>
</div>

<slot />

<style>
  * {
    font-family: "Courier New", Courier, monospace;
  }
</style>
