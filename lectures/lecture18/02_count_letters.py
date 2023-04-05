# Challenge: 
#   1. How many unique letters are in the word supercalifragilisticexpialidocious?
#   2. How many times does each letter occur?

# Your job: loop through each letter of the word.

'''
make an empty dictionary
check if it's in the dictionary already:
if it is, increment it. "seeing it again"
otherwise, add the key with the value of 1. "this is the first time i'm seeing it"
'''
word = 'supercalifragilisticexpialidocious'
letter_count = dict()

for letter in word:
    if letter in letter_count:
        letter_count[letter] += 1
    else:
        letter_count[letter] = 1

print(letter_count)