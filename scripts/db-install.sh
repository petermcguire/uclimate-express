if [ "$(docker images -q timescale/timescaledb:latest-pg14 2> /dev/null)" == "" ]; then
    docker pull timescale/timescaledb:latest-pg14
fi
if ! [ "$(docker ps -q -f name=timescaledb)" ]; then
    docker run -d --name timescaledb -p 5432:5432 -e POSTGRES_PASSWORD=password timescale/timescaledb:latest-pg14
    sleep 3 # hacky way around waiting for container to be healthy
fi
