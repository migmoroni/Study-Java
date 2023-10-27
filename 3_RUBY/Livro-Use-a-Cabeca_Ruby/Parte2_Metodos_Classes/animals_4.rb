class Bird
    def talk(name)
        puts "#{name} Chirp! Chirp!"
    end
    def move(name, destination)
        puts "#{name} flies to the #{destination}."
    end
end

class Dog

    attr_reader :name, :age

    def name=(value)
        if value == ""
            puts "Name can't be blank!"
        else
            @name = value
        end
    end

    def age=(value)
        if value < 0
            puts "An age of #{value} isn't valid!"
        else
            @age = value
        end
    end

    def report_age
        puts "#{@name} is #{@age} years old"
    end

    def talk
        puts "#{@name} says Bark!"
    end

    def move(destination)
        puts "#{@name} runs to the #{destination}."
    end

end

class Cat
    def talk(name)
        puts "#{name} says Meow!"
    end
    def move(name, destination)
        puts "#{name} runs to the #{destination}."
    end
end

fido = Dog.new
fido.name = ""
fido.age = -1
rex = Dog.new
rex.name = "Rex"
rex.age = 3
fido.report_age
rex.report_age



cat = Cat.new
cat_name = "Fluffy"
cat.talk(cat_name)
cat.move(cat_name, "litter box")