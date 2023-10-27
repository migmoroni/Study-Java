class Bird
    def talk(name)
        puts "#{name} Chirp! Chirp!"
    end
    def move(name, destination)
        puts "#{name} flies to the #{destination}."
    end
end

class Dog

    def make_up_name
        @name = "Sandy"
    end

    def talk
        puts "#{@name} says Bark!"
    end

    def move(destination)
        puts "#{@name} runs to the #{destination}."
    end

    def make_up_age
        @age = 5
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

dog = Dog.new
dog.make_up_name
dog.move("yard")
dog.make_up_age
dog.report_age



cat = Cat.new
cat_name = "Fluffy"
cat.talk(cat_name)
cat.move(cat_name, "litter box")