import os
import openai

learningTypes = ["type1", "type2", "type3", "type4", "type5", "type6"]
quizdata = [3, 4, 9, 12, 31, 6]
topic = "geese"

def getPercentages(quizdata):
    p=quizdata.copy()
    s=sum(p)
    for i in range(len(p)):
        p[i]=p[i]/s
    return p, s

def selectMode(quizdata, topic):
    percentages, sum = getPercentages(quizdata)
    instructions = "write a single sentence about {t}. This user is ".format(t = topic)
    for i in range(len(percentages)): 
        instructions += ", {p:.2f}% {t} learning style".format(p=percentages[i], t=learningTypes[i])
    return instructions

def main():
    instructions = selectMode(quizdata, topic)
    print(instructions)
    '''# Create a client using OpenAI's compatible interface for Groq
    client = openai.OpenAI(
        base_url="https://api.groq.com/openai/v1",
        api_key=os.environ.get("GROQ_API_KEY")
    )

    # Send a chat completion request
    response = client.chat.completions.create(
        model="llama3-8b-8192",  # Groq does not support "gpt-4.1", use LLaMA 3 instead
        messages=[
            {"role": "user", "content": instructions}
        ]
    )
    print(response.choices[0].message.content)'''

if __name__ == "__main__":
    main()
