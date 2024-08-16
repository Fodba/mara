
// $(document).ready(function(){
//     $('.bio').slick({
//         autoplay: true,
//         arrows: false,
//     });

//     $('.concept-name').click(function (){
//         var nom = $(this).attr('id').replace('concept-','');
//         //alert(nom);
//         var cible = "#def-" + nom;
//         //alert(cible);
//         $('.concept-definition').each(function(){
//             $(this).hide();
//         });
//         $(cible).css('display','block');
//     });

// });

const concepts = document.getElementsByClassName('concept-name');
const definitions = document.getElementsByClassName('concept-definition');
for (concept of concepts) {
    // console.log(concept.id);
    concept.addEventListener('click', function (e) {
        console.log(e.target);
        let nom = e.target.id.replace('concept-', '');
        // console.log(nom);
        let cible = "def-" + nom;
        // console.log(cible);
        for (def of definitions) {
            def.setAttribute('style', 'display: none;');
        }
        cibles = document.getElementById(cible);
        console.log(cibles);
        cibles.setAttribute('style', 'display: block;');
    });
}