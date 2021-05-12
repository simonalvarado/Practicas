import random

def main():

    number = random.randint(1, 10)
    print("Debes adivinar el numero del 1 al 10 que escogio la computadora")

    for i in range(3):

        pick = int(input("Cual crees que es?: "))
        if pick == number:
            print(f"Felicidades, Adivinaste! El numero es el {number}")
            return
        else:
            print("Lo siento, no adivinaste, intenta de nuevo")

    print(f"Se acabaron los intentos, el numero era {number}")

main()