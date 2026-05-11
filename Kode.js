

/*CODE holder riktig passord mens REDIRECT holder hvor man skal sendes til når man får riktig kode. const gjør at den aldri kan endre seg mens let betyr at den kan endre seg.  */
const CODE = '9428';
const REDIRECT = 'rom2.html'
let input = '';

/* Denne kjører hver gang man presser en av "Buttonene" og "digit" er hvilken button det er. Som feks: klikke 9 = press('9') */
/* .Lenght teller hvor mange siffere det er i stringen. */
/* Input += digit gjør at den legger til en digit på slutten av tallet på Input_kode feks:  Presser 9+5+7    Viser 957_ */
/* den siste delen : if (input.length === 4) check(); får den bare til å sjekke om koden er riktig etter 4 siffere er presset inn. Kunne ha byttet ut noe før check() med en knapp eller noe hvis jeg ville.   */
function press(digit){
    if (input.length >= 4) return;
    input += digit;
document.getElementById('Input_Kode').textContent = input.padEnd(4,'_');
if (input.length === 4) check();
}

/* Sjekker om den er lik const CODE som vi skrev tidligere. tre erlik tegn === gjør at den sjekker at det er nøyaktig lik. og hvis det er riktigt så sender den deg til REDIRECT som er linka til neste side.  */
function check(){
if (input === CODE){
    window.location.href = REDIRECT;

} else{
    alert('Feil kode!');
    input = '';
    document.getElementById('display').textContent = '____';
}
}