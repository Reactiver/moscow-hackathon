LOCAL_NAME=marketplace
IMAGE=itsreactive/market

echo ">>> Building prod version"
npm run build:prod

echo ">>> Building local image: ${LOCAL_NAME}"
docker build -t $LOCAL_NAME .


echo ">>> Tagging image to new name: ${IMAGE}"
docker tag ${LOCAL_NAME} ${IMAGE}


echo ">>> Pushing image"
docker push ${IMAGE}


echo ">>> All done!"
