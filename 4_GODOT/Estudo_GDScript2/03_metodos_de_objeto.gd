#Estamos herdando do objeto Node2D, pois o objeto level
#é um objeto do tipo Node2D
extends Node2D


#Variavel que armazena um valor texto
var ola_mundo: String = "Olá, mundo!" #String
var saudacao: String = "Olá aventureiro, em que posso lhe ajudar!" #infere que precisa ser uma String (tipar a variavel, aumenta o desempenho)


#A tipagem é uma forma de inferir que a variavel vai ser de um determinado tipo especifico.
#Em especifico, tipar uma variavel pode tornar o codigo até 300% mais rápido.
#Além de deixar o código muito mais organizado!
var tipagem_string: String = "Esta variavel está tipada como uma String!"


# funcao ready, é uma funcao que é executada assim que o
#Detentor do Script está pronto, assim como os seus filhos
#Ela é executada apenas uma vez, quando o objeto fica pronto
func _ready() -> void:
	print(tipagem_string.is_empty()) #mostra se esta vazio
	print(tipagem_string.length()) #mostra o tamanho
	print(tipagem_string.to_camel_case()) #torna o texto em Camel Case
	print(tipagem_string.to_lower()) #torna o texto com as letras em minusculo
	print(tipagem_string.to_pascal_case()) # torna o texto com as primeiras letras como maiusculas
	print(tipagem_string.to_snake_case()) #torna o texto todo minusculo, com espaços com underlines
	print(tipagem_string.to_upper()) #torna o texto com as letras em maiusculo
	
	print(tipagem_string.capitalize())