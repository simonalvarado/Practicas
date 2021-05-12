class Vuelo():
    def __init__(self, capacidad):
        self.capacidad = capacidad
        self.pasajeros = []

    def add_pasajero(self, nombre):
        if not self.open_seats():
            return False
        self.pasajeros.append(nombre)
        return True

    def open_seats(self):
        return self.capacidad - len(self.pasajeros)

vuelo = Vuelo(2)

people = ["Harry", "Ron", "Hermione", "Hagrid"]

for person in people:
    if vuelo.add_pasajero(person):
        print(f"added {person} to flight successfully")
    else:
        print(f"no available seats for {person}")
        