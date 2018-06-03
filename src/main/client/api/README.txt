SETUP
  npm install -g json-server
  yarn install
RUN
  node ./node_modules/json-server/bin/index.js ./api/db.json --routes ./api/routes.json --host 127.0.0.1 --port 4300
