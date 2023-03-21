const touches = [...document.querySelectorAll('.bouton')]
const listeKeyCode = touches.map(elem => elem.dataset.key);
const ecran = document.querySelector('.ecran')


document.addEventListener('keydown', (e) => {
    const valeur = e.keycode.toString();
    calculer(valeur)
});


document.addEventListener('click', (e) =>{
    const valeur = e.target.dataset.key;
    calculer(valeur)
})


const calculer = (valeur) => {
    if (listeKeyCode.includes(valeur)) {
        switch (valeur) {
            case '67':
                ecran.textContent = ""
                break;
            case '13':
                const calcul = eval(ecran.textContent)
                ecran.textContent = calcul
                break;
            default :
            const indexKeyCode = listeKeyCode.indexOf(valeur)
            const touche = touches[indexKeyCode]
            ecran.textContent += touche.innerHTML
        }
    }
}

window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul')
})


