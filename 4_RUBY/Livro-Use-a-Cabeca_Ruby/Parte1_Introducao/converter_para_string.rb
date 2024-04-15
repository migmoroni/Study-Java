num_guesses = 0

#Usando metodo to_s para converter inteiro em string
remaining_guesses = 10 - num_guesses
puts remaining_guesses.to_s + " guesses left"

#Usando interpolação
remaining_guesses = 10 - num_guesses
puts "#{remaining_guesses} guesses left"

#Deixando o calculo dentro da interpolação
puts "#{10 - num_guesses} guesses left"