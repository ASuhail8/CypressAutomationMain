FROM cypress/browsers:node16.5.0-chrome94-ff93
RUN apt update && apt upgrade -y
RUN mkdir /cypress-e2e-docker
WORKDIR /cypress-e2e-docker
COPY ./package.json .
COPY ./package-lock.json .
COPY ./cypress.json .
COPY ./cypress ./cypress
RUN npm install -g "cypress@9.4.1"
RUN npm install download-file --save
RUN npm install --save jimp
RUN cypress verify
ENTRYPOINT ["cypress", "run"]