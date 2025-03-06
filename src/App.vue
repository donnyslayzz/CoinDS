<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/trade">Trade</router-link></li>
        <li><router-link to="/wallet">Wallet</router-link></li>
      </ul>
    </nav>

    <router-view></router-view> <!-- ✅ This ensures Vue loads different pages -->
  </div>
</template>

<style>
nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 15px;
}

nav ul li {
  display: inline;
}

nav ul li a {
  text-decoration: none;
  color: blue;
  font-weight: bold;
}
</style>
