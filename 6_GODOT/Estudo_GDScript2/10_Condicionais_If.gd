extends Node2D

var numero: int = -1

@export var pode_printar_mensagem: bool = true;

func _ready() -> void:
	if pode_printar_mensagem == true:
		print("Aqui, uma mensagem")
		
		
	if numero > 10:
		print("Numero maior que 10")
	elif numero == 10:
		print("Numero igual a 10")
	else:
		print("Numero menor que 10")
		
		
	if !(numero < 100):
		print("Numero maior que 100")
		
		
	if numero > 10 and numero <= 20:
		print("Numero entre 11 e 20")
		
		
	if numero > 10 or numero < 20:
		print("Numero maior que 10 OU menor que 20")
		
		
	if numero > 0 and numero <= 10:
		print("Numero entre 1 e 10")
	elif numero > 10 and numero <= 100:
		print("Numero entre 11 e 100")
	elif numero > 100:
		print("Numero maior que 100")
	else:
		print("Igual a 0 OU negativo")
		
		
	print("Mensagem comum")