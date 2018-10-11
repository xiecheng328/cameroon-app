<template>
    <div id="app">
        <mu-container>
        <router-view/>
        <mu-bottom-nav>
            <mu-bottom-nav-item title="Recents" to="Blog" ></mu-bottom-nav-item>
            <mu-bottom-nav-item title="Message" to="/message" ></mu-bottom-nav-item>
            <mu-bottom-nav-item title="Shop" to="/shop"></mu-bottom-nav-item>
            <mu-bottom-nav-item title="Profile" to="/profile"></mu-bottom-nav-item>
        </mu-bottom-nav>
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
