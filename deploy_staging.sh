#!/bin/zsh
echo "Changing build permissions to 755"
chmod -R 755 build/
echo "Moving Files to EC2"
aws s3 sync build/ s3://staging.briananders.net --recursive
echo "Done"

# /bin/zsh deploy.sh