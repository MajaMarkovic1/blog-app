<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <div class="nav-link">Blog app</div>
            </li>
            <li class="nav-item active">
              <router-link class="nav-link" to="/posts">Posts</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
</template>

<style>
nav div {
  background-color: rgb(207, 58, 58);
}

</style>