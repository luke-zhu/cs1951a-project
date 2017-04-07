import csv
import json

def main():

    training_data = []
    testing_data = []
    actuals = []
    predictions = []

    year = 1959
    while year < 2016:
    	with open('/home/aafinocc/course/cs1951a/final_project/midterm-report-master/spotify_data-' + str(year) + '.json', 'r') as f:
    		reader = json.load(f)
        	for i in range(0, len(reader)):
        		if i%2 == 0:
        			training_data.append(reader[i])
        		else:
        			testing_data.append(reader[i])
        f.close()
        year = year + 1


	genre_value = {}

	for entry in training_data:

		if entry is not None: 
			if entry["genres"]:

				if not entry["genres"][0] in genre_value:
					genre_value[entry["genres"][0]] = (float(entry["popularity"]), 1)

				else:
					genre_value[entry["genres"][0]] = (genre_value[entry["genres"][0]][0] + float(entry["popularity"]), genre_value[entry["genres"][0]][1] + 1)
	
	genre_average = {}

	for genre in genre_value:
		genre_average[genre] = genre_value[genre][0]/genre_value[genre][1]

	variance = 0
	i = 0
	j = 0
	for entry in testing_data:
		j = j + 1
		if entry is not None:
			if entry["genres"]:

				if entry["genres"][0] in genre_average:
					i = i + 1
					difference = float(entry["popularity"]) - genre_average[entry["genres"][0]]
    				
    				if entry["genres"][0] in genre_average:
    					actuals.append(entry["popularity"])
    					predictions.append(genre_average[entry["genres"][0]])

    				print difference
    				variance = variance + (difference)**2
    

    f = open('/home/aafinocc/course/cs1951a/final_project/output.csv', 'w')
    writer = csv.writer(f)
    writer.writerow(['actual', 'prediction'])
    print(len(actuals))
    print(len(predictions))
    length = len(actuals)
    p = 0
    while p < length:
    	writer.writerow((actuals[p], predictions[p]))
    	p = p + 1
    
    print i
    print j
    print ("test average variance: ", variance/i)


if __name__ == "__main__":
    main()