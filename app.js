function Jugador( nombre ){

	this.pv = 100;
	this.sp = 100;	

}

Jugador.prototype.curar = function( jugadorObjetivo ){
		if( this.sp > 40 ){
			jugadorObjetivo.pv += 20;
			this.sp -= 40;
			this.estado( jugadorObjetivo );
		}else{
			console.info( "El jugador no tiene suficiente SP." );
		}
	}

Jugador.prototype.tirarFlecha = function( jugadorObjetivo ){
		if( jugadorObjetivo.pv >= 1 && this.sp >= 25 ){
			if( jugadorObjetivo.pv <= 30 ){
				jugadorObjetivo.pv = 0;
				console.error( "El jugador objetivo ha muerto." );
			}else{
				jugadorObjetivo.pv -= 30;
			}
			this.sp -= 25;
			this.estado( jugadorObjetivo );
		}else{
			console.info( "El jugador no tiene suficiente SP." );
		}
	}

Jugador.prototype.tormentaDeFuego = function( jugadorObjetivo ) {
	if( jugadorObjetivo.pv >= 1 && this.sp >= 40 ){
		if( jugadorObjetivo.pv <= 45 ){
			jugadorObjetivo.pv = 0;
			console.error("El jugador objetivo ha muerto.");
		}else{
			jugadorObjetivo.pv -= 45;
		}
		this.sp -= 40;
		this.estado( jugadorObjetivo );
	}else{
		console.info("El jugador no tiene suficiente SP.");
	}
}

Jugador.prototype.estado = function( jugadorObjetivo ){
		console.log( this );
		console.log( jugadorObjetivo );
	}	

var gandalf = new Jugador( "Gandalf" );
var legolas = new Jugador( "Legolas" );

console.log( gandalf );
console.log( legolas );
