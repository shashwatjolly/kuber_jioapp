import sys
def calcDist(coord1, coord2):
	from math import sin, cos, sqrt, atan2, radians

	# approximate radius of earth in km
	R = 6373.0

	lat1 = radians(coord1[0])
	lon1 = radians(coord1[1])
	lat2 = radians(coord2[0])
	lon2 = radians(coord2[1])

	dlon = lon2 - lon1
	dlat = lat2 - lat1

	a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
	c = 2 * atan2(sqrt(a), sqrt(1 - a))

	distance = R * c

	return distance

def getNearest(lat, lon, worker_type):

	def comp(worker1, worker2):
		if calcDist((lat, lon), (worker1['Latitude'], worker1['Longitude'])) < calcDist((lat, lon), (worker2['Latitude'], worker2['Longitude'])):
			return True

	import pyrebase
	import functools

	config={
	    "apiKey" : "AIzaSyC_j71A8Gp_teFwKQDcaAc2PU8az_64XLc",
	    "authDomain" : "sawaalsite.firebaseapp.com",
	    "databaseURL" : "https://sawaalsite.firebaseio.com",
	    "projectId" :"sawaalsite",
	    "storageBucket" : "sawaalsite.appspot.com",
	    "messagingSenderId" : "44834842355",
	}

	res = {}
	text = None

	firebase = pyrebase.initialize_app(config)
	db = firebase.database()

	try:
		workers = db.child("Users").child("Providers").order_by_child("Prof").equal_to(worker_type).get().val()
	except:
		workers = {}

	avail_workers = []
	for w in workers.keys():
		if workers[w]['IsFree']:
			avail_workers.append(workers[w])
	sorted(avail_workers, key=functools.cmp_to_key(comp))

	if(len(avail_workers) == 0):
		text = "Unfortunately there are no %ss available right now" %(worker_type)
	else:
		i = 0
		text = "Sorted by distance, the available %ss and their phone numbers are:\n" %(worker_type)
		while i < 5 and i < len(avail_workers):
			text +=  "%s (%s) [Jobs - %s, Average Rating - %s]\n" %(avail_workers[i]['Name'], avail_workers[i]['Mobile'], str(avail_workers[i]['Jobs']), str(avail_workers[i]['Rating']))
			i += 1

	res['fulfillmentText'] = text
	res['source'] = "Firebase Realtime Database"

	return res


if __name__ == '__main__':
	print(getNearest(72.11, 51.22, 'Painter'))