# MyPal-dev
👾👾👾
Dev environment of MyPal \
Covid hit the entire experience of college life badly.
Making new friends, doing gossips, attending meetups was the best part of college life.

MyPal was created to take the entire experience of your college life online.

Stack: \
Frontend - React.js \
State management - React Context API \
Backend - Firebase cloud functions \
Database - Firebase Realtime, Firestore

List of features: \
1.Share your thoughts with your community on the feed \
2.Confess anonymously \
3.Attend virtual events \
4.Seamlessly chat with new Pals

Directory Structure: \
client - has all the ui-components along with calls to firebase for fetching data. \
server - has firebase functions to react to changes in firestore/firebase-realtime databases.

# Run locally: 
```
cd client
npm install
npm start
```

# Contribution guidelines:
commit messages:
feat: The new feature you are adding to MyPal \
fix: A bug fix \
style: Feature and updates related to styling \
refactor: Refactoring a specific section of the codebase \
test: Everything related to testing \
docs: Everything related to documentation

Example commit message: \
feat: added report confessions option
