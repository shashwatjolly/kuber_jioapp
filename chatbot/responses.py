import json
from retrieve import getNearest

def makeWebhookResponse(req, worker_type):
	try: 
		req_result = req.get("queryResult")
	except:
		raise ValueError("ERROR1")

	try:
		req_action = str(req_result.get("action"))
	except:
		raise ValueError("ERROR2")

	resp = {}
	
	resp_text = "Alright, looking for %ss in your area. Please share your location, thanks!" %(worker_type)

	resp['fulfillmentText'] = resp_text

	if req_action.strip() == "locationPrompt":

		facebook_dict = {"text": resp_text,
						"quick_replies": [
						{
							"content_type":"location",
						}
						]
						}

		source = "Bot"

		resp['source'] = source
		resp['payload'] = {}
		resp['payload']['facebook'] = facebook_dict

		return resp

	else:
		resp['source'] = "NONE"
		return resp

def getWorkers(req, worker_type):
	payload = req.get("originalDetectIntentRequest").get("payload").get("data").get("postback").get("data")
	res = {}

	lat = None
	lon = None

	# res['fulfillmentText'] = str(req)
	# return res

	if(payload is not None):
		try: 
			lat = float(payload['lat'])
			lon = float(payload['long'])
		except:
			res['fulfillmentText'] = "Could not find the required data, please try again later"
			raise ValueError("Error")

		return getNearest(lat, lon, worker_type)

	res['fulfillmentText'] = str(req)
	return res



def randomResponse(req):
	# payload = req.get("originalDetectIntentRequest").get("payload")
	# lat = None
	# lon = None

	resp = {}
	resp['source'] = "NONE"
	resp['fulfillmentText'] = str(req)
	return resp
