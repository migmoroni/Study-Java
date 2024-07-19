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

@export var um_nome_de_variavel: String = "Olá" #Permite ser visto pelo inspetor, auxiliando alterações de valores (nome alterado para "alterado"). Como foi alterado, percebe-se que é utilizado o que foi dado no inspetor, assim, não usando o dado original do código.
@export var fixacao: String #Minimo necessário para ficar correto

# funcao ready, é uma funcao que é executada assim que o
#Detentor do Script está pronto, assim como os seus filhos
#Ela é executada apenas uma vez, quando o objeto fica pronto
func _ready() -> void:
	print(um_nome_de_variavel)