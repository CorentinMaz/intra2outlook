#!/usr/bin/env python3
import os
import email
import smtplib
import ssl
from email import encoders
from email.mime.base import MIMEBase
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

def send_mail(receiver_email):
    subject = "Planning intra"
    body = ""
    sender_email = "intra2outlook@gmail.com"
    password = "N2Cn8Pa4q"

    message = MIMEMultipart()
    message["From"] = sender_email
    message["To"] = receiver_email
    message["Subject"] = subject
    message["Bcc"] = receiver_email

    message.attach(MIMEText(body, "plain"))

    filename = "intra2outlook.ics"

    with open(filename, "rb") as attachment:
        part = MIMEBase("application", "octet-stream")
        part.set_payload(attachment.read())

    encoders.encode_base64(part)

    part.add_header(
        "Content-Disposition",
        f"attachment; filename= {filename}",
    )

    message.attach(part)
    text = message.as_string()

    context = ssl.create_default_context()
    with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
        server.login(sender_email, password)
        server.sendmail(sender_email, receiver_email, text)

def write_mail(fichier, title, start, end, location, description):
    fichier.write("BEGIN:VCALENDAR\nVERSION:2.0\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\n")
    fichier.write("SUMMARY:%s\n" % title)
    fichier.write("DTSTART;TZID=Europe/Paris:%s\n" % start)
    fichier.write("DTEND;TZID=Europe/Paris:%s\n" % end)
    fichier.write("LOCATION:%s\n" % location)
    fichier.write("DESCRIPTION: %s\n" % description)
    fichier.write("STATUS:CONFIRMED\nSEQUENCE:3\nBEGIN:VALARM\nTRIGGER:-PT10M\nDESCRIPTION:Pickup Reminder\nACTION:DISPLAY\nEND:VALARM\nEND:VEVENT\nEND:VCALENDAR")


def init_mail(receiver_email, title, start, end, location, description):
    fichier = open("intra2outlook.ics", "w+")
    fichier = open("intra2outlook.ics", "a")
    write_mail(fichier, title, start, end, location, description)
    fichier.close()
    send_mail(receiver_email)
    os.remove("intra2outlook.ics")

if __name__ == "__main__":
    init_mail("corentin.mazabrard@epitech.eu", "title", "20210517T103400", "20210517T110400", "Salle machine 1", "description")
