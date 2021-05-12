def main():
    x = int(input("Ingresa la dimension del grid: "))
    print_grid(x)

def print_grid(n):
    for i in range(n):
        for j in range(n):
            print("#", end="")
        print()

main()