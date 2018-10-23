<template>
    <div>
        <div id="detailhead">
            <h2 id="detailreturn" @click="detailback()"><--</h2>    <h2> numéro d'abonnement</h2>
        </div>
        <div id="detailtext">
            <h6 style="margin: 0 auto ;width: 2rem">Utilisation de machines agricoles</h6>
            <div> Avec la généralisation de la mécanisation agricole, de machines agricoles apparaissent de plus en plus les maisons, la question de l'utilisation de nouvelles machines agricoles est très important.<br/>

                　　C'est de lire la notice.Dans le nouveau acheter de nouvelles machines, le moteur avant de l'utiliser, il faut d'abord lire notice sérieusement à l'aide de ladite machine, une attention particulière doit être d'utiliser les dispositions de marques de diesel, avant d'utiliser pleinement la précipitation et de filtrage, un dispositif de ravitaillement en carburant à nettoyer.De l'huile de lubrification à nettoyer, et à ajouter de l'huile doit être suffisamment et régulièrement de remplacement, l'utilisation de la marque doit être conforme à la réglementation.Filtre à air pour toujours attention à l'entretien, à l'attention de ne pas ajouter de l'eau de refroidissement, et, en particulier, de sorte que le moteur est à l'état de fonctionnement de la pénurie d'eau.Toujours vérifier, la fixation des boulons, écrous, en particulier le boulon de bielle, un arbre d'entraînement du volant sur le boulon et l'écrou de blocage, un écrou de fixation de roue.<br/>

                Le deuxième est l'essai de rodage.L'achat de nouvelles machines, pas tout de suite avec la charge de travail, doit être en conformité avec les instructions de fonctionnement d'essai de rodage.Après la fin de la machine de meulage, de nettoyage de filtre d'huile et le retrait de l'huile dans les impuretés résiduelles, il est nécessaire également pour son huile de remplacement et de nettoyage de carter d'huile.<br/>
                　　Ce n'est pas à la charge de travail.Lorsque la nouvelle machine de travail, doit être strictement conformément aux exigences des instructions du fabricant, de ne pas surcharger, pas d'excès de vitesse, pas de super - alimentation, pas à long terme de la charge de travail.<br/>

                Quatre, c'est pas libre pour de nouvelles machines de réparer et arbitraire de réglage à vitesse de rotation élevée du moteur.Certains utilisateurs afin de permettre à la machine de courir plus vite, de la quantité d'alimentation en huile de pression d'alimentation en carburant et éventuellement de régulation de haute pression de la pompe à huile, certains également un ressort de régulation de vitesse avec du fil de ligature, c'est une erreur.<br/>
                　　L'utilisation rationnelle de nouvelles machines agricoles, la réduction de défaillance mécanique, de prolonger la durée de vie de machines, d'améliorer la production agricole.<br/>
            </div>

        </div>
    </div>
</template>
<script>
    export default {
        methods:{
            detailback(){
                this.$router.push('openSubScription_content');
            }
        }
    }
</script>
<style scoped>
    #detailhead{
        display: flex;
        flex-direction: row;
        background: #0086b3;
    }
    #detailtext{
        margin: .1rem;
        width: 100%;
        height: 100%;
        border:.001rem solid #ccc;
    }
    h2{
        margin-top: .1rem;
        margin-left:1rem;
    }
    #detailreturn{

        margin-left: .2rem;

    }

</style>