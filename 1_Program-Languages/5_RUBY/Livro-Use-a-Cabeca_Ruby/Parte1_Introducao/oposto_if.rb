unless true
    puts "I won't be printed!"
end

unless false
    puts "I will"
end


light = "green"

if ! (light == "red")
    puts "Go!"
end

unless light == "red"
    puts "Go!"
end

