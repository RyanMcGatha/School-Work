coin = 0
while True:
    total_coins = print('You have ' + str(coin) + ' coins.')

    another_coin = input('would you like another? (yes or no)')
    
    if another_coin == 'yes':
        print('You have ' + str(coin + 1) + ' coins')
    elif another_coin == 'no':
        print('Bye')
        break


