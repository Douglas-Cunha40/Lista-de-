document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('.cadastra').addEventListener('click', function (event) {
        event.preventDefault();

        const nomeDaTarefa = document.getElementById('nome-tarefa').value;
        const criaLista = document.createElement('li');
        criaLista.innerHTML = nomeDaTarefa;

        document.querySelector('ul').appendChild(criaLista);
        document.getElementById('nome-tarefa').value = '';

        let imagemAdicionada = false; 

        criaLista.addEventListener('click', function () {
            if (!imagemAdicionada) {
                criaLista.classList.toggle('feito');

                const img = document.createElement('img');
                img.src = 'images/x.png';
                img.alt = 'Emoji de cancelado';
                criaLista.appendChild(img);

                imagemAdicionada = true; 
                
                img.addEventListener('click', function (event) {
                    event.stopPropagation();
                    document.querySelector('ul').removeChild(criaLista);
                });
            }
        });
    });
});

