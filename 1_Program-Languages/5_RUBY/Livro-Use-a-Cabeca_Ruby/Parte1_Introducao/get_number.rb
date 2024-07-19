# Jogo "Adivinhe meu número"
# Escrito por: Miguel!

puts "Welcome to 'Get My Number!'"

# Obtém  o nome do jogador e o cumprimenta.
print "What's your name?"
input = gets

name = input.chomp

puts "Welcome, #{name} !"

#puts input.inspect
#p input

#Armazena um número aleatório para o jogador adivinhar.
puts "I've got a random number between 1 and 100."
puts "Can you guess it?"
target = rand(100) + 1

#Monitora quantas tentativas o jogador fez.
num_guesses = 0

#Monitora se o jogador adivinhou corretamente
guessed_it = false

#while num_guesses < 10 && guessed_it == false #Com while (enquanto isso é true)
until num_guesses == 10 || guessed_it #Com until (enquanto isso é false)

    puts "You've got #{10 - num_guesses} guesses left"
    print "Make a guess: "
    guess = gets.to_i

    num_guesses += 1

    #Compara a tentativa do alvo.
    #Imprime a mensagem apropriada.
    if guess < target
        puts "Ooops. Your guess was LOW."
    elsif guess > target
        puts "Ooops. Your guess was HIGH."
    elsif guess == target
        puts "Good job, #{name}!"
        puts "You guessed my number in #{num_guesses} guesses!"
        guessed_it = true
    end

end

#Se o jogador ficar se mais tentativas, dizer-lhe qual era o numero.
unless guessed_it
    puts "Sorry. You didn't get my number. (It was #{target})"
end

