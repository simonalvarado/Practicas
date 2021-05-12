people = [
    {"name": "Simon", "country": "Argentina"},
    {"name": "Yoed", "country": "Spain"},
    {"name": "Sofia", "country": "Venezuela"},
]

def f(person):
    return person["country"]

people.sort(key=f)

print(people)