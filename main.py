import requests
import random


def restaurant(type, area):
    API_KEY = 'API_KEY'
    ENDPOINT = 'https://api.yelp.com/v3/businesses/search'
    HEADERS = {'Authorization': 'bearer %s' % API_KEY}
    contenders = []

    PARAMETERS = {'term': type,
                  'limit': 25,
                  'radius': 10000,
                  'location': area}

    response = requests.get(url=ENDPOINT, params=PARAMETERS, headers=HEADERS)

    business_data = response.json()

    for bfz in business_data['businesses']:
        if bfz['is_closed'] == False:
            contenders.append(bfz)
            #print(bfz)

    choice = random.choice(contenders)
    address = ''
    for add in choice['location']['display_address']:
        address += add + ' '
    print('You should try %s! This has a rating of %d stars. The phone number of this restaurant is %s and is located on %s'
          % (choice['name'], choice['rating'], choice['display_phone'], address))


def main():
    type = input('Enter the type of restaurant you are looking for: ')
    area = input('Enter the location of interest: ')
    restaurant(type, area)


main()
