#Estamos herdando do objeto Node2D, pois o objeto level
#é um objeto do tipo Node2D
extends Node2D


#Variavel que armazena um valor texto
var saudacao: String = "Olá aventureiro, em que posso lhe ajudar!" #infere que precisa ser uma String (tipar a variavel, aumenta o desempenho)
var ola_mundo: String = "Olá, mundo!" #String

#A tipagem é uma forma de inferir que a variavel vai ser de um determinado tipo especifico.
#Em especifico, tipar uma variavel pode tornar o codigo até 300% mais rápido.
#Além de deixar o código muito mais organizado!
var tipagem_string: String = "Esta variavel está tipada como uma String!"


# funcao ready, é uma funcao que é executada assim que o
#Detentor do Script está pronto, assim como os seus filhos
#Ela é executada apenas uma vez, quando o objeto fica pronto
func _ready() -> void:
	print(saudacao)
	print(ola_mundo)
	print(tipagem_string)