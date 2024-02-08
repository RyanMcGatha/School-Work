# hello.py

name = input("what is your name? ")

print('Hello,' + name.upper() + "!")

# hello2.py

name_count = len(name)

print('your name has '.upper() + str(len(name)) + ' letters in it! Awesome!'.upper())

# madlib.py

adlib_begin = 'Please fill in the blanks below:'

print(adlib_begin)

adlib = '____(name)____\'s favorite subject in school is ____(subject)____.'

print(adlib)

blank1 = input('what is name?')

blank2 = input('what is subject?')

print(blank1 + '\'s favorite subject in school is ' +  blank2 + '.')

# day_of_week.py

day_of_week = int(input('Day of weeek(0-6)?'))

print(day_of_week)

if day_of_week == int(0):
    print('Sunday') 
elif day_of_week == int(1):
    print('Monday')
elif day_of_week == int(2):
    print('Tuesday')
elif day_of_week == int(3):
    print('Wednesday')
elif day_of_week == int(4):
    print('Thursday')
elif day_of_week == int(5):
    print('Friday')
elif day_of_week == int(6):
    print('Saturday')
else:
    print('please enter a mumber 0-6')

# work_or_sleep_in.py
day_of_week2 = int(input('Day of week(0-6)? (yes im asking again)'))

print(day_of_week2)

if day_of_week2 == 0 or day_of_week2 == 6:
    print('Sleep in') 
elif day_of_week2  >= 1 <=6: 
    print('Go to work')     
else:
    print('please enter a number 0-6')

# degree_conversion.py
    
ask_temp = int(input('Tempature in C?')) 

if ask_temp >= 0:
    print(float((ask_temp * 9/5) + 32)) 
elif ask_temp < 0:
    print(float((ask_temp * 9/5) + 32)) 
else:
    print('Please enter tempature')


