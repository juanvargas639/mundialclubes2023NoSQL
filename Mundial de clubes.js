"MUNDIAL DE CLUBES 2022"
"-------------CREACION DE LA BASE DE DATOS PARA EL MUNDIAL DE CLUBES-------"
use MundialClubes2022

"------------------CREACION DE LAS COLECCIONES PARA EL MUNDIAL DE CLUBES------"
db.createCollection("Equipos")
db.createCollection("Partidos")
db.createCollection("Arbitros")
db.createCollection("Sedes")
db.createCollection("Premios")

"------------AGREGAR DOCUMENTOS A LA COLECCION DE SEDES------------------"
db.Sedes.insertMany(
[
 {"_id":53174310,"nombre":"Estadio Internacional Khalifa","ciudad":"Doha","capacidad":40000,"inauguracion":"1976","renovacion":"2005"},
 {"_id":53174311,"nombre":"Estadio Ciudad de la Educación","ciudad":"Doha","capacidad":45000,"inauguracion":"2019","renovacion":"-"},
 {"_id":53174312,"nombre":"Estadio Al Rayyan","ciudad":"Al Rayyan","capacidad":40000,"inauguracion":"2003","renovacion":"2015"}
])

"------------AGREGAR DOCUMENTOS A LA COLECCION DE EQUIPOS------------------"
db.Equipos.insertMany(
[
  {"_id":62303990,"nombre":"Real Madrid","pais":"España","entrenador":"Carlo Ancelotti","jugadores":["Thibaut Courtois","Dani Carvajal","Sergio Ramos","Raphaël Varane","Ferland Mendy","Toni Kroos","Luka Modric","Casemiro","Eden Hazard","Vinícius Júnior","Karim Benzema"],"estadio":"Estadio Santiago Bernabéu","titulos":13,"ultimos_partidos":[{"equipo_rival":"Barcelona","resultado":"empate","fecha":"2022-12-23T21:00:00Z"},{"equipo_rival":"Valencia","resultado":"victoria","fecha":"2022-12-18T17:30:00Z"}],"imagen":"https://example.com/images/real_madrid.jpg"},

  {"_id":62303991,"nombre":"Al-Ahly","pais":"Egipto","entrenador":"Pitso Mosimane","jugadores":["Mohamed El Shenawy","Ali Maaloul","Ayman Ashraf","Badr Banoun","Mohamed Hany","Amr El Solia","Hussein El Shahat","Mohamed Magdy","Junior Ajayi","Marwan Mohsen","Walter Bwalya"],"estadio":"Estadio Internacional de El Cairo","titulos":10,"ultimos_partidos":[{"equipo_rival":"Al Ittihad","resultado":"victoria","fecha":"2022-12-27T20:00:00Z"},{"equipo_rival":"Zamalek","resultado":"victoria","fecha":"2022-12-22T18:00:00Z"}],"imagen":"https://example.com/images/al_ahly.jpg"},

  {"_id":62303992,"nombre": "Flamengo","pais": "Brasil","entrenador": "Renato Gaúcho","jugadores": ["Diego Alves", "Mauricio Isla", "Bruno Viana", "Gustavo Henrique", "Filipe Luís", "William Arão", "Gerson", "Everton Ribeiro", "Giorgian De Arrascaeta", "Michael", "Gabriel Barbosa"],"estadio": "Estadio do Maracanã","titulos": 7,"ultimos_partidos":[{"equipo_rival":"Palmerias","resultado":"victoria","fecha":"2022-12-27T13:00:00Z"},{"equipo_rival":"Corinthians","resultado":"empate","fecha":"2022-12-22T15:00:00Z"}],"imagen": "https://example.com/images/flamengo.jpg"}
])

"------------AGREGAR DOCUMENTOS A LA COLECCION DE ARBITROS------------------"
db.Arbitros.insertMany(
[
  {"_id":82356720,"nombre":"Felix Brych","nacionalidad":"Alemania","fecha_nacimiento":"03/08/1975","liga_principal":"Bundesliga","experiencia":18,"partidos_dirigidos":[{"fecha":"20/04/2022","equipos":["Real Madrid","Paris Saint-Germain"],"resultado":"2-0"},{"fecha":"01/05/2022","equipos":["Manchester City","Paris Saint-Germain"],"resultado":"0-2"},{"fecha":"28/05/2022","equipos":["Chelsea","Manchester City"],"resultado":"0-1"}],"arbitros_asistentes":[{"nombre":"Mark Borsch","nacionalidad":"Alemania"},{"nombre":"Stefan Lupp","nacionalidad":"Alemania"}]},

  {"_id":82356721,"nombre":"Néstor Pitana","nacionalidad":"Argentina","fecha_nacimiento":"17/06/1975","liga_principal":"Liga Argentina","experiencia":15,"partidos_dirigidos":[{"fecha":"15/06/2022","equipos":["México","Jamaica"],"resultado":"2-0"},{"fecha":"30/06/2022","equipos":["Uruguay","Colombia"],"resultado":"0-0"},{"fecha":"10/07/2022","equipos":["Italia","Argentina"],"resultado":"1-1"}],"arbitros_asistentes":[{"nombre":"Hernán Maidana","nacionalidad":"Argentina"},{"nombre":"Juan Pablo Belatti","nacionalidad":"Argentina"}]}
])

"------------AGREGAR DOCUMENTOS A LA COLECCION DE PARTIDOS------------------"
db.Partidos.insertMany(
[
 {"_id":91483220,"equipo_local": "Real Madrid","equipo_visitante": "Al-Ahly","goles_local": 2,"goles_visitante": 0,"fecha": "2023-12-18","sede": "Estadio Internacional Khalifa, Doha","arbitro_principal": "Felix Brych","arbitros_asistentes": ["Mark Borsch", "Stefan Lupp"],"fase": "Semifinal","evento": "Karim Benzema anotó un doblete en la segunda parte para darle la victoria al Real Madrid y clasificarlo a la final del Mundial de Clubes 2023."},

 {"_id":91483221,"equipo_local": "Flamengo","equipo_visitante": "Al-Hilal","goles_local": 3,"goles_visitante": 1,"fecha": "2023-12-19","sede": "Estadio Internacional Khalifa, Doha","arbitro_principal": "Néstor Pitana","arbitros_asistentes": ["Hernán Maidana", "Juan Pablo Belatti"],"fase": "Semifinal","evento": "Flamengo se clasifica para la final del Mundial de Clubes 2019 gracias a los goles de Bruno Henrique, que anotó un doblete, y de Al-Bulayhi en propia puerta. Al-Hilal descontó en el segundo tiempo con un gol de Salem Al-Dawsari."},

 {"_id":91483222,"equipo_local":"Real Madrid","equipo_visitante":"Flamengo","goles_local":2,"goles_visitante":1,"fecha":"2023-12-22","sede":"Estadio Internacional Khalifa","arbitro_principal":"Felix Brych","arbitros_asistentes":["Mark Borsch","Stefan Lupp"],"fase":"Final","evento":"El Real Madrid se coronó campeón del Mundial de Clubes 2023 tras ganar en la final 2-1 al Flamengo de Brasil, con goles de Karim Benzema y Marco Asensio para los españoles y de Bruno Henrique para los brasileños."}
])

"------------AGREGAR DOCUMENTOS A LA COLECCION DE PREMIOS------------------"
db.Premios.insertMany(
[
 {"_id":62642460,"nombre":"Mejor Jugador del Partido","descripcion":"El mejor jugador de la final entre Real Madrid y Flamengo","fecha_entrega":"2022-12-12","ganador":"Karim Benzema","categoria":"Mejor Jugador","valor":50000},
	
 {"_id":62642461,"nombre":"Máximo Goleador del Torneo","descripcion":"El jugador que marcó más goles durante el torneo","fecha_entrega":"2022-12-22","ganador":"Gabigol","categoria":"Máximo Goleador","valor":25000},
	
 {"_id":62642462,"nombre":"Mejor Portero del Torneo","descripcion":"El mejor portero durante el torneo","fecha_entrega":"2022-12-22","ganador":"Thibaut Courtois","categoria":"Mejor Portero","valor":25000}
])