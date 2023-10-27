extends Node2D



func _ready() -> void:
	print(get_tree().get_nodes_in_group("player")) #Lista os sprites que estão no grupo
	print(get_tree().get_nodes_in_group("enemy")) #Lista os sprites que estão no grupo
	
	for player in get_tree().get_nodes_in_group("player"):
		#print(player.flip_h) #Se personagem está invertido na horizontal
		print(player.name)
	
	for enemy in get_tree().get_nodes_in_group("enemy"):
		#print(enemy.name)
		pass
		
