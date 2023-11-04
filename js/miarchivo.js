let HP = 100
let jugador = prompt('esta es una historia interactiva en la que cada una de tus decisiones tendra un impacto en el desarrollo de la trama,por favor ingresa tu nombre')
alert(`el nombre ingresado es ${jugador}`)
alert(`Corre el año 1923, ${jugador} eres un peon rural que acaba de terminar su jornada en la finca, tomas tus herramientas ,las cargas en el caballo y decides pasar por el almacen de don Javier para comprar mercaderia antes de regresar a "La Huerta" tu hogar, una casa con paredes de adobe con techo de monte negro y barro,entre los productos que escoges decides agregar un vino tinto en modo de agasajo por tu desmpeño de hoy`)
alert(`tras cargar la mercaderia en las alforjas,montas y te vas alejando de la pequeña plaza para adentrarte por un camino de tierra que lleva a los cerros,un camino agreste completamnete de tierra y lleno de piedras`)
alert(`ya vas a mitad de camino y cae la noche en el campo,el cielo esta despejado y hay luna llena, lo cual agradeces ya que a tu linterna le queda poca bateria,es una noche calurosa y tranquila,el silbido del viento,y el sonido de los cascos del caballo inundan tus oidos mientras que el aullido de los cayotes y el ladrido de perros resuenan a la lejania del vasto campo`)
do {

    let decision1 = parseInt(prompt( `la brisa nocturna logra refrescar tu acalorado cuerpo,pero hay algo que el viento no puede hacer y es saciar tu sed,de pronto dejas de prestar atencion al sonido del viento y el tintineo de la botella de vino en la alforja comienza a acaparar completamente tu atencion,pero compraste la botella con la intecion de compartirla junto a tu señora que te esta esperando en la huerta,por otro lado tienes una cantimplora llena de agua junto a las herramientas
    1 - tomar la cantimplora
    2 - abrir la botella de vino
    3 -  tolerar la sed`))
    switch(decision1){
        case 1 :
            HP = HP -10
            console.log(`al jugador ${jugador} le quedan ${HP} ptos de vida`)
            alert("hurgas en la alforja de la izquierda para darte cuenta que parte de las herramientas estan mojadas porque un punzon perforo la cantimplora de plastico dejandola completamente vacia")
            break
        case 2 :
            alert ("sacas la botella que se encuentra en la alforja de la derecha,y con un rapido movimiento de manos con un cuchillo sacas sin problemas el corcho")    
            break 
           case 3 :
          HP = HP - 100
           console.log(`al jugador ${jugador} le quedan ${HP} ptos de vida poniendo fin a su viaje`)
            alert(`decides soportar la sed,pero al poco tiempo te desmayas y caes del caballo golpeandote la cabeza contra una gran piedra al lado del camino,poniendo fin a tu vida`)
            break
            default:
                alert("ingrese una opcion valida")
                break
    }

}while(HP >0)
alert(`gracias ${jugador} por haber jugado esta primera version,si deseas probar algun otra opcion presiona F5 para volver a intentarlo`)
