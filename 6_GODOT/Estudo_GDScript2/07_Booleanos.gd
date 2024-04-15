extends Node2D

var texto: String = "Um texto"
var e_um_texto: bool = true
var um_numero: int = 20

func _ready() -> void:
	print(texto.is_empty()) #false
	print(texto == "Um texto") #true
	print(not e_um_texto)
	print(! e_um_texto)
	
	print(um_numero > 10)
	print(um_numero < 10)
	print(um_numero == 10)