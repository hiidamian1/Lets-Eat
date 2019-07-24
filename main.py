from flask import Flask, jsonify
import requests
import random

app = Flask(__name__)

choice = ''
def restaurant(type, area):
    API_KEY = 'APIKEYHERE'
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
        if not bfz['is_closed']:
            contenders.append(bfz)
            print(bfz)

    choice = random.choice(contenders)
    address = ''
    for add in choice['location']['display_address']:
        address += add + ' '
    print('You should try %s! This has a rating of %d!. The phone number of this restaurant is %s and is located on %s'
          % (choice['name'], choice['rating'], choice['display_phone'], address))


@app.route('/getRestaurant', methods=['GET'])
def getRestaurant():
    return jsonify({'choice': choice})


if __name__ == "__main__":
    app.run(debug=True)



