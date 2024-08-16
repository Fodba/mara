console.log("pret");
const demandes = document.getElementsByClassName("demandes");
console.log(demandes);
const situations = document.getElementsByClassName("situations");
console.log(situations);
const messages = document.getElementsByClassName("block_message");
console.log(messages);
// const demandes = document.getElementsByClassName("demandes");
// console.log(demandes);

for (let element of demandes) {
    // console.log(element);
    element.addEventListener('click', function (e) {
        // console.log(e.target);
        for (s of situations) {
            s.setAttribute('style','display: none;')
        }
        for (m of messages) {
            m.setAttribute('style','display: none;')
        }
        let id = e.target.id;
        if (id !== '') {
            // console.log(id);
            // console.log('ok');
            let situationCible = 'situations-' + id;
            // console.log(situationCible);
            let blockSituations = document.getElementById(situationCible);
            // console.log(blockSituations);
            blockSituations.setAttribute('style','display: inline-block;');
        }
    });
};

// console.log("\n\n\n");
for (let element of situations) {
    // console.log(element);
    element.addEventListener('click', function (e) {
        console.log('\n');
        console.log(e.target);
        for (m of messages) {
            m.setAttribute('style','display: none;')
        }
        let id = e.target.id;
        if (id !== '') {
            console.log(id);
            console.log('ok');
            let messageCible = 'block-' + id;
            console.log(messageCible);
            let blockMessage = document.getElementById(messageCible);
            console.log(blockMessage);
            blockMessage.setAttribute('style','display: inline-block;');
        }
    });
};