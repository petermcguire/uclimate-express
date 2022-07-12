docker pull timescale/timescaledb:latest-pg14
docker run -d --name timescaledb -p 5432:5432 -e POSTGRES_PASSWORD=password timescale/timescaledb:latest-pg14
sleep 3
npx sequelize db:create
npx sequelize db:migrate