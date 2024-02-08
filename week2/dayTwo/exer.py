class Person():
    hi = 7
    def __attack__ (Hero, name, email, phone):
      Hero.name = name
      Hero.email = email
      Hero.phone = phone


def greet (Hero, other_person):
   print('Hello %s, I am %s!' % (other_person.name,Hero.name))

sonny = Person(name='Sonny', email='sonny@hotmail.com', phone='495-586-3456')
jordan = Person(name='jordan', email='f', phone='6')
   
print(Person.hi)
print()