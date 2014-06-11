#!/bin/zsh
echo "Changing build permissions to 755"
chmod -R 755 build/
echo "Moving Files to EC2"
rsync -avz build/ briananders.me:/home/ec2-user/build-temp
echo "Swapping build folders"
ssh -t briananders.me 'mv build/ build-delete/; mv build-temp/ build/;'
echo "moving nginx config"
rsync -avz default.conf briananders.me:/home/ec2-user
echo "restarting nginx"
ssh -t briananders.me 'sudo /etc/init.d/nginx restart'

# /bin/zsh deploy.sh