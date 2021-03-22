# intra2outlook
Get your Outlokk schedule on time with intra2outlook. It will get all your registration to the intra of EPITECH
and create an appointement on Outlook to don't miss the Kick-Off for example.
Launch the project and it will create appointement.

It will notify you when the appointement will start with the following informations :
    - Name of appointement
    - Name of the module
    - Start hour
    - End hour
    - Activity type
    - Room


# Requirement:
- NodeJS 14.8.0 or later
- Git

# Setup:
Clone the repository and install the dependencies.

git clone https://github.com/CorentinMaz/intra2outlook.git
cd intra2outlook
npm install

# AutoLogin EPITECH
1. Get your AutoLogin here -> https://intra.epitech.eu/admin/autolog

It will look like this -> https://intra.epitech.eu/auth-0123456789abcdefghijklmnopqrstuvwxyz0123456789
Copy the part ater "https://intra.epitech.eu/auth-"

2. Create a ".env" file at the root of the repo

3. Edit your .env with -> ID_AUTOLOGIN="0123456789abcdefghijklmnopqrstuvwxyz0123456789" <-

4. Get your access token here -> https://oauthplay.azurewebsites.net/

    - Click on "Authorize with your own account"
    - Follow the process
    - Accept All
    - Click on "Get Token"
    - Copy the "Access Token" Part

5. Edit your .env with a new line -> OUTLOOK_TOKEN="Your_Outlook_Token"

# WARNING: Never communicate your link or autologin code.
# This script does not send any request other than that of the intra

# Launch the Project

npm start