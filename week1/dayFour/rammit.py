ramit = {
    'name': 'Ramit',
    'email': 'ramit@gmail.com',
    'interests': ['movies', 'tennis'],
    'friends': [
        {
        'name': 'Jasmine',
        'email': 'jasmine@yahoo.com',
        'interests': ['photography', 'tennis']
        },
        {
        'name': 'Jan',
        'email': 'jan@hotmail.com',
        'interests': ['movies', 'tv']
        }
    ]
}




print(ramit['email'])
print(ramit['interests'])

print(ramit['friends'][0]['email'])


print(ramit['friends'][1]['interests'][1])





#letter_histogram




def letter(word):

    letter_count = {}
    for char in word:
        letter_count[char] = letter_count.get(char,0) + 1
    return letter_count


usr_inp = input('Please enter a word')

print(letter(usr_inp))





