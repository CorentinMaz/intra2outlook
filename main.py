from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import os

def get_login():
    with open('.env') as f:
        for line in f:
            if line.startswith('#') or not line.strip():
                continue
            login = line.strip().split('=', 1)[1]
    return (login)

driver = webdriver.Chrome()
driver.get('https://intra.epitech.eu/auth-' + get_login().strip('"'))
