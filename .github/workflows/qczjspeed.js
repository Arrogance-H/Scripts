# This workflow will do a clean install of node dependencies, build the source code and run tests across different versions of node
# For more information see: https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions

name: 汽车之家极速版

on:
  workflow_dispatch:
  schedule:
     - cron: '*/20 * * * *'
  watch:
    types: started
jobs:
  build:
    runs-on: ubuntu-latest
    if: github.event.repository.owner.id == github.event.sender.id
    env:
        QCZJ_GetUserInfoHEADER: ${{ secrets.QCZJ_GetUserInfoHEADER }}
        QCZJ_taskBODY: ${{ secrets.QCZJ_taskBODY }}		
        QCZJ_activityBODY: ${{ secrets.QCZJ_activityBODY }}	
        QCZJ_addCoinBODY: ${{ secrets.QCZJ_addCoinBODY }}
        QCZJ_addCoin2BODY: ${{ secrets.QCZJ_addCoin2BODY }}
        QCZJ_CASH: ${{ secrets.QCZJ_CASH }}
    steps:
      - name: Checkout
        run: |
          git clone https://github.com/ziye12/QCZJSPEED.git ~/QCZJSPEED
      - name: Use Node.js 12.x
        uses: actions/setup-node@v1
        with:
          node-version: 12.x
      - name: npm install
        if: env.QCZJ_GetUserInfoHEADER
        run: |
          cd ~/QCZJSPEED
          npm install
      - name: '运行 【汽车之家极速版】'
        if: env.QCZJ_GetUserInfoHEADER
        run: |
          cd ~/QCZJSPEED
          node qczjspeed.js
        env:
          
          PUSH_KEY: ${{ secrets.PUSH_KEY }}
          BARK_PUSH: ${{ secrets.BARK_PUSH }}
          TG_BOT_TOKEN: ${{ secrets.TG_BOT_TOKEN }}
          TG_USER_ID: ${{ secrets.TG_USER_ID }}
          BARK_SOUND: ${{ secrets.BARK_SOUND }}
          DD_BOT_TOKEN: ${{ secrets.DD_BOT_TOKEN }}
          DD_BOT_SECRET: ${{ secrets.DD_BOT_SECRET }}
