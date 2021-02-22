const axios = require("axios");
require("dotenv").config();
const autoLogin = `https://intra.epitech.eu/auth-${process.env.ID_AUTOLOGIN}`;
const readline = require("readline-sync");
