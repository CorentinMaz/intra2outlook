#!/usr/bin/env python3
import os


def write_mail(fichier, title, start, end, location, description):
    fichier.write("BEGIN:VCALENDAR\nVERSION:2.0\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\n")
    fichier.write("SUMMARY:%s\n" % title)
    fichier.write("DTSTART;TZID=Europe/Paris:%s\n" % start)
    fichier.write("DTEND;TZID=Europe/Paris:%s\n" % end)
    fichier.write("LOCATION:%s\n" % location)
    fichier.write("DESCRIPTION: %s\n" % description)
    fichier.write("STATUS:CONFIRMED\nSEQUENCE:3\nBEGIN:VALARM\nTRIGGER:-PT10M\nDESCRIPTION:Pickup Reminder\nACTION:DISPLAY\nEND:VALARM\nEND:VEVENT\nEND:VCALENDAR")

def main():
    print ("Creating")
    fichier = open("intra2outlook.ics", "w+")
    fichier = open("intra2outlook.ics", "a")
    write_mail(fichier, "title", "20210517T103400", "20210517T110400", "Salle machine 1", "description")
    # os.remove("mail.ics")
    fichier.close()

if __name__ == "__main__":
    main()
