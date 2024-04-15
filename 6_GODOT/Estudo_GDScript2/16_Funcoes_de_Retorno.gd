extends Node2D

func _ready() -> void:
	soma(10, 1)
	subtracao(5, 3)
	
	if numero_maior_que(10, 9):
		print("Numero atual, maior que numero alvo!")
	else:
		print("Numero atual, não é maior que o número alvo!")

func soma(a: int, b: int) -> void: #Retorno vazio
	print(a + b)

func subtracao(a: int, b: int) -> void:
	print(a - b)

func numero_maior_que(numero_alvo: int, numero_atual: int) -> bool:
	if numero_atual > numero_alvo:
		return true
		
	return false