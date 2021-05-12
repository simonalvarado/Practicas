def main():
    for i in range(10):
        for j in range(10):
            multiply(i, j)

def multiply(x, y):
    product = x * y
    print(f"{x} * {y} = {product}")

main()