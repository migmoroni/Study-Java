class Camera
    def take_picture
        p "Triggering shutter."
    end
    
    def load
        p "Winding film."
    end
end

class DigitalCamera < Camera
    def load
        p "Inserting Memory Card."
    end
end

camera = Camera.new
camera.load
camera.take_picture

camera2 = DigitalCamera.new
camera2.load
camera2.take_picture