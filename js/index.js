var cards = [
    {cod: '1', nipe:'clubs', value: 1, number: 'a', image: './images/cards/clubs_a.jpg'},
    {cod: '1', nipe:'spades', value: 1, number: 'a', image: './images/cards/spades_a.jpg'},
    {cod: '1', nipe:'hearts', value: 1, number: 'a', image: './images/cards/hearts_a.jpg'},
    {cod: '1', nipe:'diamonds', value: 1, number: 'a', image: './images/cards/diamonds_a.jpg'},
    {cod: '11', nipe:'clubs', value: 10, number: 'j', image: './images/cards/clubs_j.jpg'},
    {cod: '11', nipe:'spades', value: 10, number: 'j', image: './images/cards/spades_j.jpg'},
    {cod: '11', nipe:'hearts', value: 10, number: 'j', image: './images/cards/hearts_j.jpg'},
    {cod: '11', nipe:'diamonds', value: 10, number: 'j', image: './images/cards/diamonds_j.jpg'},
    {cod: '12', nipe:'clubs', value: 10, number: 'q', image: './images/cards/clubs_q.jpg'},
    {cod: '12', nipe:'spades', value: 10, number: 'q', image: './images/cards/spades_q.jpg'},
    {cod: '12', nipe:'hearts', value: 10, number: 'q', image: './images/cards/hearts_q.jpg'},
    {cod: '12', nipe:'diamonds', value: 10, number: 'q', image: './images/cards/diamonds_q.jpg'},
    {cod: '13', nipe:'clubs', value: 10, number: 'k',  image: './images/cards/clubs_k.jpg'},
    {cod: '13', nipe:'spades', value: 10, number: 'k',  image: './images/cards/spades_k.jpg'},
    {cod: '13', nipe:'hearts', value: 10, number: 'k',  image: './images/cards/hearts_k.jpg'},
    {cod: '13', nipe:'diamonds', value: 10, number: 'k',  image: './images/cards/diamonds_k.jpg'}
];
var card_types = ['clubs','diamonds', 'hearts', 'spades'];

for (let type of card_types){
    for (let index = 2; index < 11; index++){
        let card = {cod: `${index}`, nipe:type, value: index, number: `${index}`, image: `./images/cards/${type}_${index}.jpg`};
        cards.push(card);
    }
}

const table = document.getElementById('table');

const player1 = document.getElementById('player1');
var qtd_cards_palyer1 = 0;
var player1_points = 0;


var split = 0;
var player_split_points = [];
var qtd_split_cards = [];


const crupie = document.getElementById('crupie');
var cards_crupie = 0;
var crupie_points = 0;

function flip_card() {
    let flip_sound = document.getElementById("flip_sound");
    flip_sound.play();
}

function crupie_cards(cards, cards_crupie) {
    let card_nipe = Math.floor(Math.random() * 4);
    let card_cod = Math.floor(Math.random() * 13) + 1;

    if (cards_crupie == 0) {
        for (let card of cards) {
            if (card_cod == card.cod && card.nipe == card_types[card_nipe]) {
                let NewCard = document.createElement('img');
                NewCard.src = card.image;
                NewCard.className = 'cards crupie-cards';
                NewCard.id = 'crupie-card-1';
                setTimeout(() => {
                    crupie.appendChild(NewCard);
                    flip_card();
                    count_points(0);
                }, 1100)
                return card.value;
            }
        }
    }
    else if (cards_crupie == 1) {
        let NewCard = document.createElement('img');
        NewCard.src = './images/cards/card_back.jpg';
        NewCard.className = 'cards crupie-cards';
        NewCard.id = 'crupie-card-2';
        setTimeout(() => {
            crupie.appendChild(NewCard);
            flip_card();
            count_points(0);
        }, 3300) 
        return 0;
    }
}

function more_crupie_cards(cards) {
    let card_cod = Math.floor(Math.random() * 13) + 1;
    let card_nipe = Math.floor(Math.random() * 4);

    if (cards_crupie == 2) {
        let card_back = document.getElementById('crupie-card-2');
        card_back.parentNode.removeChild(card_back);

        for (let card of cards) {
            if (card_cod == card.cod && card.nipe == card_types[card_nipe]) {
                let NewCard = document.createElement('img');
                NewCard.src = card.image;
                NewCard.className = 'cards crupie-cards';
                NewCard.id = 'crupie-card-2';
                crupie.appendChild(NewCard);
                flip_card(); 
                count_points(0);
                return card.value;
            }
        }
    }
    else if (cards_crupie == 3) {
        for (let card of cards) {
            if (card_cod == card.cod && card.nipe == card_types[card_nipe]) {
                let NewCard = document.createElement('img');
                NewCard.src = card.image;
                NewCard.className = 'cards crupie-cards';
                NewCard.id = 'crupie-card-3';
                setTimeout(() => {
                    crupie.appendChild(NewCard);
                    flip_card();
                    count_points(0);
                }, 1200)  
                return card.value;
            }
        }
    }
    else if (cards_crupie == 4) {
        for (let card of cards) {
            if (card_cod == card.cod && card.nipe == card_types[card_nipe]) {
                let NewCard = document.createElement('img');
                NewCard.src = card.image;
                NewCard.className = 'cards crupie-cards';
                NewCard.id = 'crupie-card-4';
                setTimeout(() => {
                    crupie.appendChild(NewCard);
                    flip_card();
                    count_points(0);
                }, 2400)  
                return card.value;
            }
        }
    }
    else if (cards_crupie == 5) {
        for (let card of cards) {
            if (card_cod == card.cod && card.nipe == card_types[card_nipe]) {
                let NewCard = document.createElement('img');
                NewCard.src = card.image;
                NewCard.className = 'cards crupie-cards';
                NewCard.id = 'crupie-card-5';
                setTimeout(() => {
                    crupie.appendChild(NewCard);
                    flip_card();
                    count_points(0);
                }, 3600)  
                return card.value;
            }
        }
    }
}

function player_card(cards, qtd_cards_palyer1) {
    let card_nipe = Math.floor(Math.random() * 4);
    let card_cod = Math.floor(Math.random() * 13) + 1;

    if (qtd_cards_palyer1 == 0){
        for (let card of cards) {
            if (card_cod == card.cod && card.nipe == card_types[card_nipe]) {
                let NewCard = document.createElement('img');
                NewCard.src = card.image;
                NewCard.className = 'cards player-card';
                NewCard.id = 'player1-card-1';
                player_split_points.push(card.value);
                qtd_split_cards[0] = 1;
                player1.appendChild(NewCard);
                flip_card();
                count_points(1);
                return card.value;
            }
        }
    }
    else if(qtd_cards_palyer1 == 1) {
        for (let card of cards) {
            if (card_cod == card.cod && card.nipe == card_types[card_nipe]) {
                let NewCard = document.createElement('img');
                NewCard.src = card.image;
                NewCard.className = 'cards player-card';
                NewCard.id = 'player1-card-2';
                player_split_points.push(card.value);
                qtd_split_cards[1] = 1;
                setTimeout(() => {
                    player1.appendChild(NewCard);
                    flip_card();
                    count_points(1);
                }, 2200)
                return card.value;
            }
        }
    }
    else if (qtd_cards_palyer1 == 2) {
        for (let card of cards) {
            if (card_cod == card.cod && card.nipe == card_types[card_nipe]) {
                let NewCard = document.createElement('img');
                NewCard.src = card.image;
                NewCard.className = 'cards player-card';
                NewCard.id = 'player1-card-3';
                player1.appendChild(NewCard);
                flip_card();
                count_points(1);
                return card.value;
            }
        }
    }
    else if (qtd_cards_palyer1 == 3) {
        for (let card of cards) {
            if (card_cod == card.cod && card.nipe == card_types[card_nipe]) {
                let NewCard = document.createElement('img');
                NewCard.src = card.image;
                NewCard.className = 'cards player-card';
                NewCard.id = 'player1-card-4';
                player1.appendChild(NewCard);
                flip_card();
                count_points(1);
                return card.value;
            }
        }
    }
    else if (qtd_cards_palyer1 == 4) {
        for (let card of cards) {
            if (card_cod == card.cod && card.nipe == card_types[card_nipe]) {
                let NewCard = document.createElement('img');
                NewCard.src = card.image;
                NewCard.className = 'cards player-card';
                NewCard.id = 'player1-card-5';
                player1.appendChild(NewCard); 
                flip_card();
                count_points(1);
                return card.value;
            }
        }
    }
    else if (qtd_cards_palyer1 == 5) {
        for (let card of cards) {
            if (card_cod == card.cod && card.nipe == card_types[card_nipe]) {
                let NewCard = document.createElement('img');
                NewCard.src = card.image;
                NewCard.className = 'cards player-card';
                NewCard.id = 'player1-card-6';
                player1.appendChild(NewCard); 
                flip_card();
                count_points(1);
                return card.value;
            }
        }
    }
    else if (qtd_cards_palyer1 == 6) {
        for (let card of cards) {
            if (card_cod == card.cod && card.nipe == card_types[card_nipe]) {
                let NewCard = document.createElement('img');
                NewCard.src = card.image;
                NewCard.className = 'cards player-card';
                NewCard.id = 'player1-card-7';
                player1.appendChild(NewCard); 
                flip_card();
                count_points(1);
                return card.value;
            }
        }
    }
    else if (qtd_cards_palyer1 == 7) {
        for (let card of cards) {
            if (card_cod == card.cod && card.nipe == card_types[card_nipe]) {
                let NewCard = document.createElement('img');
                NewCard.src = card.image;
                NewCard.className = 'cards player-card';
                NewCard.id = 'player1-card-8';
                player1.appendChild(NewCard); 
                flip_card();
                count_points(1);
                return card.value;
            }
        }
    }
    else if (qtd_cards_palyer1 == 8) {
        for (let card of cards) {
            if (card_cod == card.cod && card.nipe == card_types[card_nipe]) {
                let NewCard = document.createElement('img');
                NewCard.src = card.image;
                NewCard.className = 'cards player-card';
                NewCard.id = 'player1-card-9';
                player1.appendChild(NewCard); 
                flip_card();
                count_points(1);
                return card.value;
            }
        }
    }
    else if (qtd_cards_palyer1 == 9) {
        for (let card of cards) {
            if (card_cod == card.cod && card.nipe == card_types[card_nipe]) {
                let NewCard = document.createElement('img');
                NewCard.src = card.image;
                NewCard.className = 'cards player-card';
                NewCard.id = 'player1-card-10';
                player1.appendChild(NewCard); 
                flip_card();
                count_points(1);
                return card.value;
            }
        }
    }
    else if (qtd_cards_palyer1 == 10) {
        for (let card of cards) {
            if (card_cod == card.cod && card.nipe == card_types[card_nipe]) {
                let NewCard = document.createElement('img');
                NewCard.src = card.image;
                NewCard.className = 'cards player-card';
                NewCard.id = 'player1-card-11';
                player1.appendChild(NewCard); 
                flip_card();
                count_points(1);
                return card.value;
            }
        }
    }
}

function count_points(points) {
    if (split == 0){
        if (points == 0){
            let p = document.getElementById('crupie-points');
            p.innerText = crupie_points;
            crupie.appendChild(p);
        }
        else if (points == 1){
            let p = document.getElementById('player1-points');
            p.innerText = player1_points;
            player1.appendChild(p);
        }
    }
    else{
        if (points == 0){
            let p = document.getElementById('crupie-points');
            p.innerText = crupie_points;
            crupie.appendChild(p);
        }

        let point_left = document.getElementById('player1-left-points');
        point_left.innerText = player_split_points[0];
        let point_right = document.getElementById('player1-right-points');
        point_right.innerText = player_split_points[1];
    }

    
}

function clean_table(class1, class2) {
    var elements1 = document.getElementsByClassName(class1);
    var elements2 = document.getElementsByClassName(class2);
  

    var elementsArray1 = Array.from(elements1);
    var elementsArray2 = Array.from(elements2);
  

    var allElements = elementsArray1.concat(elementsArray2);
  
    for (var i = 0; i < allElements.length; i++) {
      allElements[i].parentNode.removeChild(allElements[i]);
    }
}

function points_interface() {
    if (split == 0){
        let player_view = document.createElement('p');
        player_view.className = 'points';
        player_view.id = 'player1-points';
        player1.appendChild(player_view);

        let crupie_view = document.createElement('p');
        crupie_view.className = 'points';
        crupie_view.id = 'crupie-points';
        crupie.appendChild(crupie_view);
    }
    else{
        let left_points = document.createElement('p');
        left_points.className = 'points';
        left_points.id = 'player1-left-points';
        left_points.textContent = player_split_points[0];
        player1.appendChild(left_points);

        let right_points = document.createElement('p');
        right_points.className = 'points';
        right_points.id = 'player1-right-points';
        right_points.textContent = player_split_points[1];
        player1.appendChild(right_points);
    }
    
}

function result(show_result){
    let end_game = document.getElementById('end-game');

    if (split == 0){
        if (crupie_points > 21 && player1_points <= 21) {
            end_game.innerHTML = `<h2>FIM DE JOGO! <br> JOGADOR VENCEU</h2>
            <button id="play-again"><h2>Jogar Novamente</h2></button>`
        }
        else if (crupie_points <= 21 && player1_points > 21){
            end_game.innerHTML = `<h2>FIM DE JOGO! <br> JOGADOR PERDEU</h2>
            <button id="play-again"><h2>Jogar Novamente</h2></button>`
        }
        else if(player1_points > 21 && crupie_points > 21){
            end_game.innerHTML = `<h2>FIM DE JOGO! <br> JOGADOR PERDEU</h2>
            <button id="play-again"><h2>Jogar Novamente</h2></button>`
        }
        
        if (show_result == 1){
            if(crupie_points <= 21 && player1_points <= 21){
                if (crupie_points > player1_points){
                    end_game.innerHTML = `<h2>FIM DE JOGO! <br> JOGADOR PERDEU</h2>
                    <button id="play-again"><h2>Jogar Novamente</h2></button>`
                }
                else if (crupie_points == player1_points){
                    end_game.innerHTML = `<h2>FIM DE JOGO! <br> EMPATE</h2>
                    <button id="play-again"><h2>Jogar Novamente</h2></button>`
                }
                else{
                    end_game.innerHTML = `<h2>FIM DE JOGO! <br> JOGADOR VENCEU</h2>
                    <button id="play-again"><h2>Jogar Novamente</h2></button>`
                }
            }
        }
    }
    else{
        if (player_split_points[0] <= 21 && player_split_points[1] <= 21 && crupie_points <= 21){
            if (player_split_points[0] > crupie_points && player_split_points[1] > crupie_points){
                end_game.innerHTML = `<h2>FIM DE JOGO! <br> JOGADOR VENCEU<br>NAS DUAS MÃOS</h2>
                <button id="play-again"><h2>Jogar Novamente</h2></button>`
            }
            else if (player_split_points[0] < crupie_points && player_split_points[1] < crupie_points){
                end_game.innerHTML = `<h2>FIM DE JOGO! <br> JOGADOR PERDEU<br>NAS DUAS MÃOS</h2>
                <button id="play-again"><h2>Jogar Novamente</h2></button>`
            }
            else if (player_split_points[0] > crupie_points && player_split_points[1] < crupie_points){
                end_game.innerHTML = `<h2>FIM DE JOGO! <br> JOGADOR VENCEU NA MÃO ESQUERDA<br>E PERDEU NA DIREITA</h2>
                <button id="play-again"><h2>Jogar Novamente</h2></button>`
            }
            else if (player_split_points[0] < crupie_points && player_split_points[1] > crupie_points){
                end_game.innerHTML = `<h2>FIM DE JOGO! <br> JOGADOR VENCEU NA MÃO DIREITA<br>E PERDEU NA ESQUERDA</h2>
                <button id="play-again"><h2>Jogar Novamente</h2></button>`
            }
            else if(player_split_points[0] == crupie_points && player_split_points[1] == crupie_points){
                end_game.innerHTML = `<h2>FIM DE JOGO! <br> EMPATE NAS DUAS MÃOS</h2>
                <button id="play-again"><h2>Jogar Novamente</h2></button>`
            }
            else if(player_split_points[0] == crupie_points && player_split_points[1] < crupie_points){
                end_game.innerHTML = `<h2>FIM DE JOGO! <br> JOOGADOR EMPATOU NA MÃO ESQUERDA<br>E PERDEU NA DIREITA</h2>
                <button id="play-again"><h2>Jogar Novamente</h2></button>`
            }
            else if(player_split_points[0] == crupie_points && player_split_points[1] > crupie_points){
                end_game.innerHTML = `<h2>FIM DE JOGO! <br> JOGADOR EMPATOU NA MÃO ESQUERDA<br>E VENCEU NA DIREITA</h2>
                <button id="play-again"><h2>Jogar Novamente</h2></button>`
            }
            else if(player_split_points[1] == crupie_points && player_split_points[0] < crupie_points){
                end_game.innerHTML = `<h2>FIM DE JOGO! <br> JOGADOR PERDEU NA ESQUERDA<br>E EMPATOU NA DIREITA</h2>
                <button id="play-again"><h2>Jogar Novamente</h2></button>`
            }
            else if(player_split_points[1] == crupie_points && player_split_points[0] > crupie_points){
                end_game.innerHTML = `<h2>FIM DE JOGO! <br> JOGADOR VENCEU NA ESQUERDA<br>E EMPATOU NA DIREITA</h2>
                <button id="play-again"><h2>Jogar Novamente</h2></button>`
            }
        }
        else if (player_split_points[0] > 21 && player_split_points[1] > 21 && crupie_points > 21){
            end_game.innerHTML = `<h2>FIM DE JOGO! <br> JOGADOR PERDEU<br>NAS DUAS MÃOS</h2>
            <button id="play-again"><h2>Jogar Novamente</h2></button>`
        }
        else if (player_split_points[0] <= 21 && player_split_points[1] <= 21 && crupie_points > 21){
            end_game.innerHTML = `<h2>FIM DE JOGO! <br> JOGADOR VENCEU<br>NAS DUAS MÃOS</h2>
            <button id="play-again"><h2>Jogar Novamente</h2></button>`
        }
        else if (player_split_points[0] <= 21 && player_split_points[1] > 21 && crupie_points > 21){
            end_game.innerHTML = `<h2>FIM DE JOGO! <br> JOGADOR VENCEU NA MÃO ESQUERDA<br>E PERDEU NA DIREITA</h2>
            <button id="play-again"><h2>Jogar Novamente</h2></button>`
        }
        else if (player_split_points[0] > 21 && player_split_points[1] <= 21 && crupie_points > 21){
            end_game.innerHTML = `<h2>FIM DE JOGO! <br> JOGADOR VENCEU NA MÃO DIREITA<br>E PERDEU NA ESQUERDA</h2>
            <button id="play-again"><h2>Jogar Novamente</h2></button>`
        }
    }
    const play_gain = document.getElementById('play-again');
            play_gain.onclick = function(e){
            window.location.reload();
            }
}

function buttons() {
    let show_result = 0;

    let more_cards_button = document.createElement('button');
    more_cards_button.id = "more_cards_button";
    more_cards_button.innerText = 'Pedir';
    player1.appendChild(more_cards_button);

    let stop_button = document.createElement('button');
    stop_button.id = 'stop';
    stop_button.innerText = 'Parar';
    player1.appendChild(stop_button);

    let split_cards_button = document.createElement('button');
    split_cards_button.id = "split_cards_button";
    split_cards_button.innerText = 'Dividir';
    player1.appendChild(split_cards_button);

    stop_button.onclick = function (e){
        if (split == 0){
            player1.removeChild(more_cards_button);
            player1.removeChild(stop_button);
            player1.removeChild(split_cards_button);

            while (crupie_points < 17) {
                crupie_points += more_crupie_cards(cards);
                cards_crupie++;
                count_points(0);
            }
            show_result = 1;
            result(show_result);
        }
    }

    more_cards_button.onclick = function (e) {
        if (split == 0){
            player1_points += player_card(cards, qtd_cards_palyer1);
            disabled_button(more_cards_button);
            qtd_cards_palyer1++;
            count_points(1);
            flip_card();


            if (player1_points >= 21) {
                player1.removeChild(more_cards_button);
                player1.removeChild(stop_button);
                player1.removeChild(split_cards_button);
                setTimeout(() => {
                    while (crupie_points < 17) {
                        crupie_points += more_crupie_cards(cards);
                        cards_crupie++;
                        count_points(0);
                    }
                    show_result = 1;
                    result(show_result);
                }, 1100);
            }
        }
    }

    

    if (player_split_points[0] != player_split_points[1]){
        split_cards_button.onclick = function(e){
        split_cards();
        points_interface()
        }
    }
    else{
        split_cards_button.disabled = true;
    }

    
}

function disabled_button(button){
    button.disabled = true;
    setInterval(() => {
        button.disabled = false;
    }, 1300);
}

function split_cards(){
    let split_button = document.getElementById('split_cards_button');
    split_button.disabled = true;
    split = 1;
    qtd_cards_palyer1 = [1, 1];
    player1.removeChild(document.getElementById('player1-points'));


    let left_card = document.getElementById('player1-card-1');
    left_card.id = 'player1-split-left-1';
    

    let right_card = document.getElementById('player1-card-2');
    right_card.id = 'player1-split-right-1';


    let more_cards = document.getElementById('more_cards_button');
    let right_hand_stop = false
    let left_hand_stop = false
    
    more_cards.onclick = function (e){
        if (player_split_points[1] < 21 && right_hand_stop == false){
            disabled_button(more_cards);
            player_split_points[1] += more_card_split('right');
            count_points();
            flip_card();
            
            
        }
        else if (player_split_points[1] >= 21){
            right_hand_stop = true;
        }


        if (player_split_points[0] < 21 && right_hand_stop == true && left_hand_stop == false){
            disabled_button(more_cards);
            player_split_points[0] += more_card_split('left');
            count_points();
            flip_card();
        }
        else if(player_split_points[0] >= 21){
            left_hand_stop = true
        }
        
        if(player_split_points[0] >= 21 && right_hand_stop == true){
            player1.removeChild(more_cards);
            player1.removeChild(stop_button);
            player1.removeChild(split_button);

            while (crupie_points < 17) {
                crupie_points += more_crupie_cards(cards);
                cards_crupie++;
                count_points(0);
            }
            result();
        }
        else if(left_hand_stop == true && right_hand_stop == true){
            player1.removeChild(more_cards);
            player1.removeChild(stop_button);
            player1.removeChild(split_button);

            while (crupie_points < 17) {
                crupie_points += more_crupie_cards(cards);
                cards_crupie++;
                count_points(0);
            }
            result();
        }
    }

    let stop_button = document.getElementById('stop');
    stop_button.onclick = function (e){
        if (player_split_points[1] < 21 && right_hand_stop == false){
            right_hand_stop = true;
        }
        else if (player_split_points[0] < 21 && right_hand_stop == true){
            left_hand_stop = true;
        }

        if (left_hand_stop == true && right_hand_stop == true){
            player1.removeChild(more_cards);
            player1.removeChild(stop_button);
            player1.removeChild(split_button);

            while (crupie_points < 17) {
                crupie_points += more_crupie_cards(cards);
                cards_crupie++;
                count_points(0);
            }
            result();
        }
    }
}

function more_card_split(position) {
    let card_nipe = Math.floor(Math.random() * 4);
    let card_cod = Math.floor(Math.random() * 13) + 1;

    if (position == 'right'){
        if (qtd_split_cards[1] == 1){
            for (let card of cards) {
                if (card_cod == card.cod && card.nipe == card_types[card_nipe]) {
                    let NewCard = document.createElement('img');
                    NewCard.src = card.image;
                    NewCard.className = 'cards player-card';
                    NewCard.id = 'player1-split-right-2';
                    qtd_split_cards[1]++;
                    player_split_points[1] += card.value;
                    player1.appendChild(NewCard);
                    flip_card();
                    return card.value;
                }
            }
        }
        else if (qtd_split_cards[1] == 2){
            for (let card of cards) {
                if (card_cod == card.cod && card.nipe == card_types[card_nipe]) {
                    let NewCard = document.createElement('img');
                    NewCard.src = card.image;
                    NewCard.className = 'cards player-card';
                    NewCard.id = 'player1-split-right-3';
                    qtd_split_cards[1]++;
                    player_split_points[1] += card.value;
                    player1.appendChild(NewCard);
                    flip_card();
                    return card.value;
                }
            }
        }
        else if (qtd_split_cards[1] == 3){
            for (let card of cards) {
                if (card_cod == card.cod && card.nipe == card_types[card_nipe]) {
                    let NewCard = document.createElement('img');
                    NewCard.src = card.image;
                    NewCard.className = 'cards player-card';
                    NewCard.id = 'player1-split-right-4';
                    qtd_split_cards[1]++;
                    player_split_points[1] += card.value;
                    player1.appendChild(NewCard);
                    flip_card();
                    return card.value;
                }
            }
        }
        else if (qtd_split_cards[1] == 4){
            for (let card of cards) {
                if (card_cod == card.cod && card.nipe == card_types[card_nipe]) {
                    let NewCard = document.createElement('img');
                    NewCard.src = card.image;
                    NewCard.className = 'cards player-card';
                    NewCard.id = 'player1-split-right-5';
                    qtd_split_cards[1]++;
                    player_split_points[1] += card.value;
                    player1.appendChild(NewCard);
                    flip_card();
                    return card.value;
                }
            }
        }
        else if (qtd_split_cards[1] == 5){
            for (let card of cards) {
                if (card_cod == card.cod && card.nipe == card_types[card_nipe]) {
                    let NewCard = document.createElement('img');
                    NewCard.src = card.image;
                    NewCard.className = 'cards player-card';
                    NewCard.id = 'player1-split-right-6';
                    qtd_split_cards[1]++;
                    player_split_points[1] += card.value;
                    player1.appendChild(NewCard);
                    flip_card();
                    return card.value;
                }
            }
        }
        else if (qtd_split_cards[1] == 6){
            for (let card of cards) {
                if (card_cod == card.cod && card.nipe == card_types[card_nipe]) {
                    let NewCard = document.createElement('img');
                    NewCard.src = card.image;
                    NewCard.className = 'cards player-card';
                    NewCard.id = 'player1-split-right-7';
                    qtd_split_cards[1]++;
                    player_split_points[1] += card.value;
                    player1.appendChild(NewCard);
                    flip_card();
                    return card.value;
                }
            }
        }
        else if (qtd_split_cards[1] == 7){
            for (let card of cards) {
                if (card_cod == card.cod && card.nipe == card_types[card_nipe]) {
                    let NewCard = document.createElement('img');
                    NewCard.src = card.image;
                    NewCard.className = 'cards player-card';
                    NewCard.id = 'player1-split-right-8';
                    qtd_split_cards[1]++;
                    player_split_points[1] += card.value;
                    player1.appendChild(NewCard);
                    flip_card();
                    return card.value;
                }
            }
        }
        else if (qtd_split_cards[1] == 8){
            for (let card of cards) {
                if (card_cod == card.cod && card.nipe == card_types[card_nipe]) {
                    let NewCard = document.createElement('img');
                    NewCard.src = card.image;
                    NewCard.className = 'cards player-card';
                    NewCard.id = 'player1-split-right-9';
                    qtd_split_cards[1]++;
                    player_split_points[1] += card.value;
                    player1.appendChild(NewCard);
                    flip_card();
                    return card.value;
                }
            }
        }
    }
    else{
        if (qtd_split_cards[0] == 1){
            for (let card of cards) {
                if (card_cod == card.cod && card.nipe == card_types[card_nipe]) {
                    let NewCard = document.createElement('img');
                    NewCard.src = card.image;
                    NewCard.className = 'cards player-card';
                    NewCard.id = 'player1-split-left-2';
                    qtd_split_cards[0]++;
                    player_split_points[0] += card.value;
                    player1.appendChild(NewCard);
                    flip_card();
                    return card.value;
                }
            }
        }
        else if (qtd_split_cards[0] == 2){
            for (let card of cards) {
                if (card_cod == card.cod && card.nipe == card_types[card_nipe]) {
                    let NewCard = document.createElement('img');
                    NewCard.src = card.image;
                    NewCard.className = 'cards player-card';
                    NewCard.id = 'player1-split-left-3';
                    qtd_split_cards[0]++;
                    player_split_points[0] += card.value;
                    player1.appendChild(NewCard);
                    flip_card();
                    return card.value;
                }
            }
        }
        else if (qtd_split_cards[0] == 3){
            for (let card of cards) {
                if (card_cod == card.cod && card.nipe == card_types[card_nipe]) {
                    let NewCard = document.createElement('img');
                    NewCard.src = card.image;
                    NewCard.className = 'cards player-card';
                    NewCard.id = 'player1-split-left-4';
                    qtd_split_cards[0]++;
                    player_split_points[0] += card.value;
                    player1.appendChild(NewCard);
                    flip_card();
                    return card.value;
                }
            }
        }
        else if (qtd_split_cards[0] == 4){
            for (let card of cards) {
                if (card_cod == card.cod && card.nipe == card_types[card_nipe]) {
                    let NewCard = document.createElement('img');
                    NewCard.src = card.image;
                    NewCard.className = 'cards player-card';
                    NewCard.id = 'player1-split-left-5';
                    qtd_split_cards[0]++;
                    player_split_points[0] += card.value;
                    player1.appendChild(NewCard);
                    flip_card();
                    return card.value;
                }
            }
        }
        else if (qtd_split_cards[0] == 5){
            for (let card of cards) {
                if (card_cod == card.cod && card.nipe == card_types[card_nipe]) {
                    let NewCard = document.createElement('img');
                    NewCard.src = card.image;
                    NewCard.className = 'cards player-card';
                    NewCard.id = 'player1-split-left-6';
                    qtd_split_cards[0]++;
                    player_split_points[0] += card.value;
                    player1.appendChild(NewCard);
                    flip_card();
                    return card.value;
                }
            }
        }
        else if (qtd_split_cards[0] == 6){
            for (let card of cards) {
                if (card_cod == card.cod && card.nipe == card_types[card_nipe]) {
                    let NewCard = document.createElement('img');
                    NewCard.src = card.image;
                    NewCard.className = 'cards player-card';
                    NewCard.id = 'player1-split-left-7';
                    qtd_split_cards[0]++;
                    player_split_points[0] += card.value;
                    player1.appendChild(NewCard);
                    flip_card();
                    return card.value;
                }
            }
        }
        else if (qtd_split_cards[0] == 7){
            for (let card of cards) {
                if (card_cod == card.cod && card.nipe == card_types[card_nipe]) {
                    let NewCard = document.createElement('img');
                    NewCard.src = card.image;
                    NewCard.className = 'cards player-card';
                    NewCard.id = 'player1-split-left-8';
                    qtd_split_cards[0]++;
                    player_split_points[0] += card.value;
                    player1.appendChild(NewCard);
                    flip_card();
                    return card.value;
                }
            }
        }
        else if (qtd_split_cards[0] == 8){
            for (let card of cards) {
                if (card_cod == card.cod && card.nipe == card_types[card_nipe]) {
                    let NewCard = document.createElement('img');
                    NewCard.src = card.image;
                    NewCard.className = 'cards player-card';
                    NewCard.id = 'player1-split-left-9';
                    qtd_split_cards[0]++;
                    player_split_points[0] += card.value;
                    player1.appendChild(NewCard);
                    flip_card();
                    return card.value;
                }
            }
        }
    }
}

function init_game() {
    const deck = document.createElement('img');
    deck.src = './images/cards/card_back.jpg';
    deck.className = 'cards';
    deck.id = 'deck';
    table.appendChild(deck);

    points_interface();

    while (qtd_cards_palyer1 < 2 && cards_crupie < 2) {
        count_points(1);
        player1_points += player_card(cards, qtd_cards_palyer1);
        qtd_cards_palyer1 ++;
        

        crupie_points += crupie_cards(cards, cards_crupie);
        cards_crupie++;
    }
}


function play() {
    const play_button = document.getElementById('play-button');
    play_button.onclick = function(e) {
        table.removeChild(play_button);
        init_game();
        setTimeout(() => {
            buttons();
        }, 4000);
    }
    
}

play();