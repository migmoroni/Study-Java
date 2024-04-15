extends Node2D

var nome_da_pessoa: String = "h"

func _ready() -> void:
	match nome_da_pessoa:
		"guerreiro":
			print("Espada e Escudo")
			
		"arqueiro":
			print("Arco e Aljava")
			
		"mago":
			print("Cajado e Livro de Feitiços")
			
		"ninja":
			print("Shuriken")
			
		"Samurai":
			print("Katana")
			
		"Noviço":
			print("Clava")
			
		_:
			print("Classe não encontrada")