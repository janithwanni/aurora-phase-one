import json
import random
json_list = dict()
for ringLevel in range(1, 5):
    for nodeIndex in range(1, [4, 8, 10, 20][ringLevel-1]+1):
        for questionIndex in range(1, 5):
            json_list[
                "answerSet-"+str(ringLevel)+"-"+str(nodeIndex)+"-"+str(questionIndex)] = {"answer-1": "Apples", "answer-2": "Oranges", "answer-3": "Papaya", "answer-4": "Peanuts", "correctAnswerID": random.randrange(1, 4)}
#print(json.dumps(json_list, indent=4, sort_keys=True))
with open('answer_format_generated.json', 'w') as f:
    json.dump(json_list, f, ensure_ascii=False, indent=4, sort_keys=True)
