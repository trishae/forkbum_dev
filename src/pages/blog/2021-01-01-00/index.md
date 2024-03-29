---
path: '/blog/001'
date: '2021-01-01'
title: 'recap of a recent ctf I competed in'
author: 'isabel'
description: 'a mediocre technical recap of a ctf I competed in'
---

About a few months ago, I entered a CTF hosted by my company. There were approximately 70 registrants, and I placed 11th by the end of the competition as a team by myself. There were various categories to choose problems from - coding, exploitation, forensics, cryptography, and more.

This post is just to summarize the techniques and approaches for only a subset of the problems I solved, mostly because these are the ones I either remember or have the best written evidence for (i.e. code).

#### problem a: QR codes ####

In this problem, a .zip file was provided containing 5,000 .png files of QR codes. The flag was hidden somwhere in these QR codes.

My first thought was to loop through each of these .png files and use a library to decode the code. Below is my modified Python code which uses the [zbarlight library](https://pypi.org/project/zbarlight/) for decoding. (Note: I code in unoptimized fashion when competing heh).

```
import os
from PIL import Image
import zbarlight

def main():
    directory = './../../data/qrcodes'

    walk(directory)

def walk(directory):
    for filename in os.listdir(directory):
        if filename.endswith(".png"):
            print('processing... ', os.path.join(directory, filename))
            find(os.path.join(directory, filename))
            continue
        else:
            continue

def find(filename):
    with open(filename, 'rb') as imagefile:
        image = Image.open(imagefile)
        image.load()

    codes = zbarlight.scan_codes(['qrcode'], image)
    print('QR codes: %s' % codes)

main()
```

This was a fairly straightforward problem for me. The most challenging part was getting the dependencies to be compatible. I remember facing a lot of issues with getting the right version of the PIL library. Furthermore, the code can be optimized my implementing a loop such that if the condition that a regular expression matches the flag is met, break out of the loop.

#### problem b: socket programming ####
In this problem, I was to connect to a server, solve an arithmetic expression, then brute force a four digit PIN to get the flag. I was also provided with this command-line snippet: nc [redacted server name] [port]

Although provided, solving this doesn't require using netcat. This requires socket programming (using Python, the socket library does the job). 

In a try-catch-finally block, I established a connection to the server and received a response to prove I am human by solving an arithmetic expression, which is random at any given connection. To solve this expression, I used the eval() function in Python, which can accept the whole addition, subtraction, multiplication, or division-related expression as the parameter. The answer is then sent as a reponse, and if correct, the server then sends back the challenge to provide the pin. Since this can only be solved via brute force, this enitre server-client conversation is put inside a loop, such that for every iteration of the loop, the pin also iterates by 1. So for the first attempt, the pin is 0000, and if it is incorrect, iterate the pin to 0001 and re-establish the connection to the server. The loop goes on until 9999 or until the challenge is solved. Below is my modified Python code.

```
import socket
pin = 0

def compute(expression):
    return str(eval(expression))

def ask(pin):
    server = # server name here
    port = # port here

    flag_msg = ''

    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.connect((server, port))

        arithmetic_msg = s.recv(1024).decode('utf-8')
        print(arithmetic_msg)

        ans_reply = compute(arithmetic_msg.split(': ', maxsplit=1)[1].split(' =')[0]) + '\n'
        print(ans_reply, ans_reply.encode())

        s.sendall(ans_reply.encode())

        pin_msg = s.recv(1024).decode('utf-8')
        print(pin_msg)

        pin_reply = str(pin).zfill(4) + '\n'

        s.sendall(pin_reply.encode())
        print('trying...', pin_reply)

        flag_msg = s.recv(1024).decode('utf-8')
        print(flag_msg)

    except (BrokenPipeError, ConnectionResetError):
        print('error caught')
    finally:
        s.close()

def main(pin):
    while pin < 10000:
        print('----- round', pin, '-----')
        ask(pin)
        pin = pin + 1

main(pin)
```

This code can be optimized to break out of the loop when the flag is received as well.

#### problem c: hashed passwords ####
In this problem, I was to figure out the password of a user who says the password is the concatenation of two consecutive words in Rick Astley's "Never Gonna Give You Up" and an exclamation mark, such that the first letter of each word is capitalized. The shadow and passwd files are provided. In the shadow file, we can see the password entry for the user.

The shadow file contains key clues about our password. The grouping after the first colon contain the hashed password, the salt, and the hashing algorithm itself (for detailed information about the shadow file, see [this site](https://linux-audit.com/password-security-with-linux-etc-shadow-file/)). We know that the plaintext password is hashed using SHA-512 with the provided salt.

The solution for this problem requires brute force. Essentially, we want to step through every two consecutive words of the lyrics, hash it using SHA-512 with the salt, and see if it matches the hashed password in the shadow file. See below for the code in Python.

```
from passlib.hash import sha512_crypt

def main():
    filename = './../../data/rickPassword/nevergonnagiveyouup'
    salt = '8KWIs3JF'

    read(filename, salt)

def read(filename, salt):
    with open(filename) as file:
        data = file.read().split()

    for i in range(0,len(data)-1):
        password = data[i].capitalize() + data[i+1].capitalize() + '!'
        hashedpassword = sha512_crypt.encrypt(password, salt=salt, rounds=5000)
        print('word: ', password, '/ hashed password: ', hashedpassword)
        isShadowPassword(hashedpassword)

def isShadowPassword(hashedpassword):
    shadow = '$6$8KWIs3JF$IH9LkPx5uhxpZ3eHN.aADCK3K/p/X/1VAnLA3KURxXy7kg1tYUpu/jz/ujtgqstHyNLlf/XftUG0SFF49Qkip1'
    if hashedpassword == shadow:
        print('match found')

main()
```

#### problem d: java decompiling ####
This problem is a bit complex to explain, so I will just speak on the tool I used to approach  it. Basically, I am only provided a .jar file, and once de-compiled, the Java code must be ran, which then launches a program requiring a code to be entered during runtime. This code is essentially the flag.

To de-compile the .jar file, I used JD-GUI. It's a pretty straightforward tool - the only issues that arised for me was correcting reformats and dependency errors caused by the decompile. More on the tool can be found [here](http://java-decompiler.github.io/). 

After extracting the source code, the code can then be re-compiled and ran. In the source code, the user input is applied an encryption (XOR) alogrithm then checked against the correct encrypted code.

#### problem e: exploitation ####