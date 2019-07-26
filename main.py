from flask import Flask, jsonify, request
import requests
import random

app = Flask(__name__)


@app.route("/", methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        some_json = request.get_json()
        return jsonify({'you sent': some_json})
    else:
        return jsonify({"about": "Hello Word!"})


@app.route('/getRestaurant', methods=['GET'])
def getRestaurant():
    API_KEY = 'dpkOCmxiu5-igpuEQ7MdTJ69CWqcGiZHpy80Slnt2x8ORRSj8mR_lUrTCrPytfIH8Qau55Mb6fmt1p8oWzma7DfxnYu9sXLZ0O1iZGliz4vVraYnbNEfD60Y1dEFXXYx'
    ENDPOINT = 'https://api.yelp.com/v3/businesses/search'
    HEADERS = {'Authorization': 'bearer %s' % API_KEY}
    contenders = []

    PARAMETERS = {'term': 'sushi',
                  'limit': 25,
                  'radius': 10000,
                  'location': 'san diego'}

    response = requests.get(url=ENDPOINT, params=PARAMETERS, headers=HEADERS)

    business_data = response.json()

    for bfz in business_data['businesses']:
        if not bfz['is_closed']:
            contenders.append(bfz)

    choice = random.choice(contenders)
    address = ''
    for add in choice['location']['display_address']:
        address += add + ' '
    #print('You should try %s! This has a rating of %d!. The phone number of this restaurant is %s and is located on %s'
          #% (choice['name'], choice['rating'], choice['display_phone'], address))

    return jsonify({'choice': choice})

if __name__ == "__main__":
    app.run()



