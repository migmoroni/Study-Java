#Estamos herdando do objeto Node2D, pois o objeto level
#é um objeto do tipo Node2D
extends Node2D


#Variavel que armazena um valor texto
var ola_mundo = "Olá, mundo!"
#Variavel que armazena um valor numérico
var contador = 0

# funcao ready, é uma funcao que é executada assim que o
#Detentor do Script está pronto, assim como os seus filhos
#Ela é executada apenas uma vez, quando o objeto fica pronto
func _ready():
	#Exibe uma mensagem no console
	print(ola_mundo)
	
	print(contador)
	#Atribui mais 1 a contador
	contador += 1
	print(contador)
	#Atribui menos 1 a contador
	contador -= 1
	print(contador)