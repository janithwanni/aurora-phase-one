import json
import random
json_list = dict()
for ringLevel in range(1, 5):
    for nodeIndex in range(1, [4, 8, 10, 20][ringLevel-1]+1):
        for questionIndex in range(1, 5):
            json_list[
                "question-"+str(ringLevel)+"-"+str(nodeIndex)+"-"+str(questionIndex)] = {"questionImage": "https://i.imgur.com/UVDV9rw.jpg", "questionText": "Apples or Oranges? tiss the question-"+str(ringLevel)+"-"+str(nodeIndex)+"-"+str(questionIndex)}
#print(json.dumps(json_list, indent=4, sort_keys=True))
with open('question_format_generated.json', 'w') as f:
    json.dump(json_list, f, ensure_ascii=False, indent=4, sort_keys=True)
