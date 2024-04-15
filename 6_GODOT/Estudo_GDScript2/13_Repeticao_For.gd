extends Node2D

var lista: Array = [1, 2, 3, 4, 5]

var nlista: Array = [10, "2", 35, 46, 51]

func _ready() -> void:
	for n in lista:
		print(n) #print todos
		
	for n in lista:
		if n == 2:
			print("Numero 2") #printa apenas se tiver 2
			break #Breca e não continua o laço
			
	for n in lista:
		if n == 3:
			continue #Pula
			
		print("Numero igual a " + str(n))
	pass

	for n in nlista:
		print(n)
	
	for n in nlista.size():
		print(n)
		
	for n in nlista.size():
		print(nlista[n])
		
	for i in 10:
		print(i + 1)
		
	for i in range(10,100):
		print(i)
		
	for i in range(10,100 + 1, 10): #Passa o tamanho da iteração (step)
		print(i)
		
	for i in range(100,10 + 1, -2): #Passa o tamanho da iteração (step)
		print(i)