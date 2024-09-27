from flask import Flask, request, jsonify
from get_dates import get_dates

app = Flask(__name__)

# POST endpoint to accept and validate JSON data
@app.route('/', methods=['POST'])
def receive_data():
    data = request.get_json()

    if not data or 'text' not in data:
        return jsonify({"error": "Invalid input, 'text' key is required"}), 400
    
    text = data['text']
    if not isinstance(text, str):
        return jsonify({"error": "'text' must be a string"}), 400
    
    title, from_date, to_date = get_dates(text)

    response = {
        "Title": title,
        "From": from_date,
        "To": to_date
    }

    return jsonify(response), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
