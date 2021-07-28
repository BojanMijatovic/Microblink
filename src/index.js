import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import AppRouter from './router/AppRouter';

ReactDOM.render(<AppRouter />, document.getElementById('root'));

/*
Napraviti jednostavnu frontend SPA (single-page-app) aplikaciju za knjižnicu. Korisnički zahtjevi su sljedeći:

1. pregled knjiga u knjižnici
2. dodavanje novih knjiga i uređivanje postojećih (u knjižnici može biti više knjiga istog naslova)

3. pregled korisnika knjižnice
4. dodavanje novih korisnika i uređivanje postojećih

5. pregled posuđenih knjiga
6. sučelje za posuđivanje i vraćanje knjiga (jedan korisnik može posuditi više knjiga istovremeno)


Obavezni atributi knjige su naslov i autor, a sve ostale atribute možete dodavati po potrebi i vlastitoj želji.
Obavezni atributi korisnika su ime, prezime i datum rođenja, a sve ostale atribute možete dodavati po potrebi
i vlastitoj želji.


Svi podaci mogu biti mockani i spremljeni lokalno na klijentu (simulirajte pozive prema apiju), a u knjižnici se
inicijalno treba nalaziti nekoliko knjiga i korisnika.
*/
