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
            raise "Name can't be blank!"
        end

        @name = value     
    end

    def age=(value)
        if value < 0
            raise "An age of #{value} isn't valid!"
        end
        
        @age = value     
    end

    def talk
        puts "#{@name} says Bark!"
    end

    def move(destination)
        puts "#{@name} runs to the #{destination}."
    end

    def report_age
        puts "#{@name} is #{@age} years old"
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