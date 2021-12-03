# How to work with gitlab container registry

How to Use Gitlab Container Registry

Clone the gitlab repository prior to docker useage

Login to the gitlab container registry using a PAT generated in settings
docker login registry.gitlab.com/odoo-by-clickonrefresh/clickonrefresh-odoo

Change directory into the folder with your 'Dockerfile'
cd /DockerBuild/14.0/

Build the image with the default tag and current directry (.)
docker build -t registry.gitlab.com/odoo-by-clickonrefresh/clickonrefresh-odoo .

Push the image to registry
docker push registry.gitlab.com/odoo-by-clickonrefresh/clickonrefresh-odoo

Tag an image with a different than default (:latest) tag
docker build -t registry.gitlab.com/odoo-by-clickonrefresh/clickonrefresh-odoo:dev .
docker push registry.gitlab.com/odoo-by-clickonrefresh/clickonrefresh-odoo:dev


