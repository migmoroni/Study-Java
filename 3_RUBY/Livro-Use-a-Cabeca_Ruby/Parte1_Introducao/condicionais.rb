score = 100

if score == 100
    puts "Perfect!"
elsif score >= 70
    puts "You pass!"
else
    puts "Summer school time!"
end

if true
    puts "I'll be printed!"
end

if false
    puts "I won't!"
end

#####

if 1 == 1
    puts "I'll be printed!"
end

if 1 >= 2
    puts "I wont't!"
end

if 1 > 2
    puts "I won't!"
end

if 2 <= 2
    puts "I'll be printed!"
end

if 1 < 2
    puts "I'll be printed!"
end

if 2 != 2
    puts "I won't!"
end

#####

if ! true
    puts "I won't be printed!"
end

if not true
    puts "I won't be printed!"
end

if ! false
    puts "I will!"
end

if not false
    puts "I will!"
end

#####

if true && true
    puts "I'll be printed!"
end

if true && false
    puts "I won't!"
end

if false || true
    puts "I'll be printed!"
end

if false || false
    puts "I won't!"
end