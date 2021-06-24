# Web Extension intra2outlook v1.0

Send event email when register to an epitech activity on https://intra.epitech.eu/planning/*

## Requirement:

- Google Chrome
- NodeJS 14.8.0 or later
- Git

## How to install

### Step 1 : Clone the repository

```
$> git clone https://github.com/CorentinMaz/intra2outlook
```

### Step 2 : Install modules

```
$> cd intra2outlook/
$> npm install
```

### Step 3 : Fill in your epitech login

In the config.json, you have to enter your epitech login.

```
"email_epitech": "login.login@epitech.eu",
```

### Step 4 : Load the unpacked extension

#### Google Chrome

- Paste "chrome://extensions/" in your url.

- Activate Developer Mode

- Load the folder intra2outlook with "Load unpacked".


### Step 5 : Launch server

```
$> npm start
```

### Step 6 : Register to an activity

- go on https://intra.epitech.eu/planning and register to an activity

- an email is send to your epietch outlook mailbox

- click on the file.ics and "add to calendar"