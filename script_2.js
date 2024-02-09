/*
ÚKOL 01
Fahrnheit vs. Celsius

Pokud pečete podle anglických receptů, často se po váš požaduje rozehřát troubu na uvedenou teplotu.
Pokud si ovšem neuvědomíte, že Američané používají pro měření teploty stupně Fahrenheita namísto Celsia, bude vás na konci pečení čekat nemilé překvapení.
Nastudujte si na České Wikipedii jak se převádějí stupně Fahrenheita na stupně Celsia a vytvořte webovou stránku, která takový převod provede. 
Vaše stránka se zeptá uživatele teplotu ve stupních Fahrenheita a pomocí document.body.innerHTML vypíše její ekvivalent ve stupních Celsia.
*/

const stupen = prompt("Zadej stupeň ve Fahrnheitu: ")

document.body.innerHTML += "<strong>" + stupen + " stupňů ve Fahrnheitu, je: " + Math.round((5 * (stupen - 32)) /9) + " stupňů Celsia." + "</strong>"