from flask import Flask
from flask import request
from flask import make_response

from responses import makeWebhookResponse, getWorkers, randomResponse

import json
import os

import sys

app=Flask(__name__)

#activates the post handler when a post request is received
@app.route("/", methods=['POST'])
def postHandler():
	req = request.get_json(silent=True, force=True)

	res = None

	try:
		intent = str(req.get("queryResult").get("intent").get("displayName"))
	except:
		raise ValueError("Can't find intent")

	if intent == "RequestPlumber":
		res = makeWebhookResponse(req, "Plumber")
	elif intent == "RequestCarpenter":
		res = makeWebhookResponse(req, "Carpenter")
	elif intent == "RequestPainter":
		res = makeWebhookResponse(req, "Painter")

	elif intent == "ProcessCarpenter":
		res = getWorkers(req, "Carpenter")
	elif intent == "ProcessPlumber":
		res = getWorkers(req, "Plumber")
	elif intent == "ProcessPainter":
		res = getWorkers(req, "Painter")	

	else:
		res = randomResponse(req)

	res = json.dumps(res, indent=4)
	r = make_response(res)

	r.headers['Content-Type'] = 'application/json'

	sys.stdout.flush()

	return r

@app.route("/", methods=['GET'])
def getHandler():
	print("NOTHING")
	return "NOTHING"

if  __name__=='__main__':
	port = int(os.getenv('PORT', 5000))

	app.run(debug=True, port=port, host='0.0.0.0')