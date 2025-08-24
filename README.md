〖Best Whatsapp Bot 𝕍1 𝔸𝕟𝕥𝕚𝕓𝕒𝕟 Heroku & WhatsApp Account 2025 𝐍𝐄𝐖 𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡 𝔹𝕠𝕥〗✧

𝙋𝘼𝙄𝙍 𝘾𝙊𝘿 https://github.com/Kelvin12350/Heatless-MD

NOTE:- ✠ YOU CAN ALSO COPY THIS CODE IF CHANNEL CODE EXPIRED FOR FREE DEPLOYMENT OF E3_HACKER-MD ✠

name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Start application
      run: npm start
      # Heatless-MD
