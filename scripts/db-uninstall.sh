if [ "$(docker ps -q -f name=timescaledb)" ]; then
    docker stop timescaledb
    docker rm timescaledb
fi