extends Node2D

var lista: Array = ["Miguel", 27, 1.81]

func _ready() -> void:
	#lista.shuffle() #Embaralhar
	
	if lista.has("Miguel"):
		print("Tem")

	var indice_da_idade: int = lista.find(27)
	
	if indice_da_idade == -1:
		print("Idade não existe na lista")
	else:
		print(indice_da_idade)
		
		print(lista.size()) #tamanho 3 -> 0,1,2
		print(lista[2])

	if indice_da_idade != -1:
		lista.remove_at(indice_da_idade) #remove indice_da_idade
		print(lista)
		
	lista.append(28)
	print(lista)