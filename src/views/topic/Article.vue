<template>
    <!--朱琳-->
    <div class="cameroon-article">
        <mu-container>
            <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;">
                <mu-card-header title="Myron Avatar" sub-title="sub title">
                    <mu-avatar slot="avatar">
                        <img src="https://muse-ui.org/img/uicon.ac3913bf.jpg">
                    </mu-avatar>
                </mu-card-header>
                <mu-card-media title="Image Title" sub-title="Image Sub Title">
                    <img src="https://muse-ui.org/img/sun.a646a52d.jpg">
                </mu-card-media>
                <mu-card-title title="Content Title" sub-title="Content Title"></mu-card-title>
                <mu-card-text>
                    La lumière diffusée dans le bout des doigts, j'ai essayé de saisir la lumière légèrement trace, c'est dans l'ombre de la lumière entre le Front de la feuille suivante.
                    L'inclinaison de la lumière du soleil vilain rideau de coeur en avril, une chanson chaud là.
                    Il semble dire, moi aussi, je peux être dans le coin sombre, trouver le soleil derrière l'ombre,
                    Trouver le soleil et de l'ombre sur l'harmonie à la mélodie.Je vais utiliser un coeur sensible à la sincérité de rencontrer le soleil Chaque rayon de glisser tes doigts!
                </mu-card-text>
                <!--<mu-card-actions>-->
                    <!--<mu-button flat>Action 1</mu-button>-->
                    <!--<mu-button flat>Action 2</mu-button>-->
                <!--</mu-card-actions>-->
            </mu-card>
        </mu-container>
    </div>
</template>

<script>
    export default {
        name: "Article",
        data(){
            return{
                topic: {
                    allConcerns: this.$t('topic.allConcerns'),
                    topic: this.$t('topic.topic'),
                    watch: this.$t('topic.watch'),
                    askQuestion: this.$t('topic.askQuestion'),
                    recommend: this.$t('topic.recommend'),
                    hotList: this.$t('topic.hotList'),
                    everyoneSearching: this.$t('topic.everyoneSearching'),
                    historicalResearch: this.$t('topic.historicalResearch'),
                    endorsed: this.$t('topic.endorsed'),
                    comment: this.$t('topic.comment'),
                    minutesAgo: this.$t('topic.minutesAgo'),
                    attention: this.$t('topic.attention'),
                }
            }
        }
    }
</script>

<style scoped>

</style>