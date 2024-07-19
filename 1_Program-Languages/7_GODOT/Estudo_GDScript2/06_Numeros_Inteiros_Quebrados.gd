#Estamos herdando do objeto Node2D, pois o objeto level
#é um objeto do tipo Node2D
extends Node2D

var numero: int = 2000.89 #Não é considerado o numero após a virgula
var numeros_quebrados: float = -0.11

# funcao ready, é uma funcao que é executada assim que o
#Detentor do Script está pronto, assim como os seus filhos
#Ela é executada apenas uma vez, quando o objeto fica pronto
func _ready() -> void:
	numero -= numeros_quebrados
	print(numero) #Não mostra a redução
	print(numeros_quebrados)
	print(numero + numeros_quebrados)