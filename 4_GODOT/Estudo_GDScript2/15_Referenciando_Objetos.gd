extends Node2D

#para carregar objetos da cena, precisa primeiro chamar a funcao ready, por isso precisa do @onready
@onready var warrior: Sprite2D = get_node("Warrior")
@onready var warrior_texture: Sprite2D = get_node("Warrior/Texture")
@onready var warrior_texture2: Sprite2D = warrior.get_node("Texture")

func _ready() -> void:
		var archer: Sprite2D = get_node("Archer")
		print(warrior.name)
		print(warrior_texture.name)
		print(warrior_texture2.name)
		print(archer.name)
