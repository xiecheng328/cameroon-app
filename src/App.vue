<template>
    <div id="app">
        <mu-container>
        <router-view/>
        <div id="nav">
            <router-link to="/blog">Blog</router-link>
            |
            <router-link to="/message">Message</router-link>
            |
            <router-link to="/shop">Shop</router-link>
            |
            <router-link to="/profile">Profile</router-link>
        </div>
        </mu-container>
    </div>
</template>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
