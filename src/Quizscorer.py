# src/QuizScorer.py

style_map = {
    'A': 'Visual',
    'B': 'Auditory',
    'C': 'Reading/Writing',
    'D': 'Logical',
    'E': 'Social',
    'F': 'Solitary'
}

def score_quiz(answers):
    # answers = list of 20 selected options like ['A', 'C', 'B', ...]
    scores = {style: 0 for style in style_map.values()}
    
    for ans in answers:
        key = ans.strip().upper()[0]
        if key in style_map:
            scores[style_map[key]] += 1

    primary_style = max(scores, key=scores.get)
    return {"scores": scores, "primary_style": primary_style}