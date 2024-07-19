def mileage(miles_driven, gas_used)
    if gas_used == 0
        return 0.0 #return usado para finalizar, caso o valor não satisfaça o buscado, evitando problemas
    end

    miles_driven / gas_used
    
    #funciona sem return, desde que seja a ultima expressão

    #return miles_driven / gas_used
end

trip_mileage = mileage(400, 12)
puts "You got #{trip_mileage} MPG on this trip"

lifetime_mileage = mileage(11432, 366)
puts "This car averages #{lifetime_mileage} MPG"

puts mileage(0,0)