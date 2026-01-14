# Tackla ett programmeringsproblem
 
- Liknar det vi ska göra någonting som vi har gjort innan? Vad kan vi återanvända?
- Bryt ner flödet/pseudokod - vad ska hända?
- Vilken information har vi? (Vad kan vi?)
- Vad kan vi inte? Vad behöver vi ta reda på?



# Mood jukebox
 
> Glöm inte: börja med att skriva pseudokod!
 
- Skapa 3 knappar där man kan välja humör. Humöret = knapptexten. <button>Glad</button>
 
- Baserat på vilket humör man klickar på så ska sidans bakgrundsfärg ändras.
	(antingen direkt via `document.body.style.backgroundColor` (lättare) eller med hjälp av `document.body.classList.add` och `document.body.classList.remove` (svårare)).
 
	document.body.style.backgroundColor = '#ff0';
	happy
 
- På sidan ska det även visas namnet på 3 låtar (musiktips) som passar det valda humöret. Dvs. om jag klickar på "Glad", då ska det befintliga innehållet på sidan tas bort och ersättas med 3 låttips.
	Pharrell Williams - Happy
 
- ⭐️ Bonus: bädda in en YouTube-video baserat på respektive humör med hjälp av iframe-kod (den fås via "Share"-knappen på YouTube)


TESTING