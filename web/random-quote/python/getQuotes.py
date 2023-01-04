import os
from urllib.request import urlopen

text = urlopen("http://www.quotationspage.com/random.php")
data = text.read()

data = str(data)

os.chdir(r"C:\Users\oleee\Desktop\github\projects\react\random-quote\src")

f = open("rawtext.txt", "w")
for i in data:
    f.write(i)

f.close()

print(os.getcwd())


















