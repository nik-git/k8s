npm run install

docker build -t backend-app:01 .

docker build -t docker0411/backend-app:v2 .

docker push docker0411/backend-app:v2

docker run --name backend-app -p 4000:4000 --network=host -d backend-app:01


docker run --name backend-app -p 4000:4000 -d backend-app:01