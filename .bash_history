ifconfig
sudo yum update
ifconfig
exit
sudo yum update
ifconfig
sudo yum update
ifconfig
sudo yum update
ifconfig
sudo yum update
ifconfig
yum update
ls -ld /var/lib/dpkg/lock
ls -ltr /var/lib/dpkg/lock
ls -ltr /var/lib/dpkg/
cd /var/lob
cd /var/lib
ls
ls -ltr /var/lib/dpkg/
ls -ltr /var/lib/apt/lists/partial
docker images
docker pull ubuntu
docker images
docker ps
docker ps -a
docker run 7e214e652598
docker run -d -p 8085:8080 -p 50002:50000 jenkins
docker ps -a
docker run -d ubuntu /bin/bash
docker ps -a
docker rm daeff9417a4d
docker ps -a
docker attach efba496c82bd
cd /var/run/docker/
ls -ltr
cd libcontainerd
ls -ltr
cat docker-containerd.pid
ps -ef | grep 3314
apt-get install -y iputils-ping traceroute net-tools iproute2
docker build -t image-net .
docker
docker images
docker ps -a
docker network ls
docker network inspect bridge
docker help network
docker help network create
docker pull mysql
docker pull wordpress
docker images
docker run --name wpmysql -e MYSQL_ROOT_PASSWORD=password -d mysql:5.5
docker ps
\
docker run --name mywp --link wpmysql:mysql -P -d wordpress
docker ps
docker stop 0fd48ec16ce2 099fc56101ea
docker ps
docker images
docker rm 652d1ff3db63 f13c4be36ec5 a8a59477268d
docker ps
docker run --name wpmysql -e MYSQL_ROOT_PASSWORD=password -d mysql:5.5
docker run --name wpmysql -e MYSQL_ROOT_PASSWORD=password -d mysql:5.6
docker ps
docker run --name wpmysql -e MYSQL_ROOT_PASSWORD=password -d mysql1:5.6
docker run --name wpmysql -e MYSQL_ROOT_PASSWORD=password -d mysql:5.5
docker ps
docker images
docker rmi f13c4be36ec5 5f5ccdc8aedc a8a59477268d 652d1ff3db63
docker images
docker run --name wpmysql -e MYSQL_ROOT_PASSWORD=password -d mysql:5.5
docker run --name wpmysql -e MYSQL_ROOT_PASSWORD=password -d Mysql:5.5
docker run --name wpmysql -e MYSQL_ROOT_PASSWORD=password -d mysql:5.5
docker run --name wpmysql1 -e MYSQL_ROOT_PASSWORD=password -d mysql:5.5
docker run --name mywp --link wpmysql1:mysql -P -d wordpress
docker run --rm --link wpmysql:mysql -P wordpress env
docker ps
docker run --name mywp --link wpmysqll:mysql -P -d wordpress
docker run --name mywp1 --link wpmysqll:mysql -P -d wordpress
docker run --name mywp1 --link wpmysql:mysql -P -d wordpress
docker ps
docker stop e7175c5e4ee6
docker ps
docker images
docker ps -a
docker rm e14cc8e61424 e7175c5e4ee6 0fd48ec16ce2 099fc56101ea
docker ps -a
docker images
docker rmi 652d1ff3db63 f13c4be36ec5
docker images
docker pull mysql
docker pull wordpress
docker run --name wpmysql -e MYSQL_ROOT_PASSWORD=password -d mysql:5.5
docker run --name mywp --link wpmysql:mysql -P -d wordpress
docker info
docker ps
clear
docker ps
docker run --link wpmysql:mysql -P wordpress env
docker ps
docker psq
docker ps -a
ps -ef | grep docker
grep 3311 /etc/group
docker ps -a
docker images
docker -itd 9e47fb34f1fd /bin/bash
docker run -itd 9e47fb34f1fd /bin/bash
docker ps -a
docker rm 3891035ef864
docker ps -a
docker attach 9e47fb34f1fd
docker images
docker commit -m"This is my first image of ubuntu and apache" 452a96d81c30 Vashist-Ubuntu-Apache
docker commit -m"This is my first image of ubuntu and apache" 452a96d81c30 vashist-ubuntu-apache
docker ps
docker commit -m"This is my first image of ubuntu and apache" 9e47fb34f1fd vashist-ubuntu-apache
docker images
docker history vashist-ubuntu-apache
docker save -o Vashist-vashist-ubuntu-apache.tar vashist-ubuntu-apache
docker images
ls
pwd
mv Vashist-vashist-ubuntu-apache.tar /
cd /
ls -lt
r
docker login
docker push vashist-ubuntu-apache
docker tag vashist-ubuntu-apache solankevr/vashist-vashist-ubuntu-apache
images
docker images
docker push solankevr/vashist-vashist-ubuntu-apache
docker images
docker pull solankevr/vashist-vashist-ubuntu-apache
docker rmi solankevr/vashist-vashist-ubuntu-apache
docker images
docker pull solankevr/vashist-vashist-ubuntu-apache
docker images
env
docker images
docker ps -a
vi dockerfile
docker build -t solankevr/Vashist-ubuntu .

docker images
ls -lrt
vi dockerfile 
docker build -t test:1.0 .
ls -lrt
mkdir doc
mv dockerfile /doc
cd doc
docker build -t test:1.0 .
docker images
docker ps -a
docker attach 9e47fb34f1fd
yum install wget -y
wget https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
sudo rpm -i epel-release-latest-7.noarch.rpm
sudo yum update -y 
sudo yum install ansible -y
cat /etc/hosts
ifconfig
vi /etc/hosts 
hostname
vi /etc/sysconfig/networ
vi /etc/sysconfig/network
hostname
/etc/init.d/network restart
hostname
ansible
ansible --version
ansible --v
ansible -v
ansible -V
ansible --v
ansible --version
ansible vashist -m file -a "dest=/opt/a.txt mode=600 state=touch"
vi /etc/hosts
ansible 10.76.118.31 -m file -a "dest=/opt/a.txt mode=600 state=touch"
ls -ltr /opt/a.txt
ansible 127.0.0.1 -m file -a "dest=/opt/a.txt mode=600 state=touch"
ls -ltr /opt/a.txt
ansible 127.0.0.1 -a "dest=/opt/a.txt mode=600 state=touch"
hostname
ansible 10.76.118.31, -m file -a "dest=/opt/a.txt mode=600 state=touch"
ansible all 10.76.118.31, -m file -a "dest=/opt/a.txt mode=600 state=touch"
ansible all vashsit, -m file -a "dest=/opt/a.txt mode=600 state=touch"
ansible all -i vashsit, -m file -a "dest=/opt/a.txt mode=600 state=touch"
ansible all vashsit, -m file -a "dest=/opt/a.txt mode=600 state=touch" -K
ansible all vashsit, -m file -a "dest=/opt/a.txt mode=600 state=touch" --ask-su-pass
ansible all vashsit, -m file -K -a "dest=/opt/a.txt mode=600 state=touch"
ansible all , -m file -a "dest=/opt/a.txt mode=600 state=touch"
ansible all 10.76.118.31, -m file -a "dest=/opt/a.txt mode=600 state=touch" -K
ansible all 10.76.118.31, --ask-su-pass -m file -a "dest=/opt/a.txt mode=600 state=touch" 
ansible all 10.76.118.31, -k, --ask-pass -m file -a "dest=/opt/a.txt mode=600 state=touch" 
ansible all 10.76.118.31, -m file -a "dest=/opt/a.txt mode=600 state=touch" -k, --ask-pass
ansible all 10.76.118.31, -m file -a "dest=/opt/a.txt mode=600 state=touch" --ask-pass
ansible all 10.76.118.31, -m file -a "dest=/opt/a.txt mode=600 state=touch" -k
ansible all 10.76.118.31, -m file -a "dest=/opt/a.txt mode=600 state=touch" -K, --ask-become-pass
ansible all 10.76.118.31, -K, --ask-become-pass -m file -a "dest=/opt/a.txt mode=600 state=touch"
ansible 127.0.0.1 -m yum -a "name=httpd state=present"
ps -ef | grep http
ansible 127.0.0.1 -m yum -a "name=httpd state=absent"
ansible all 10.76.118.31, -m file -a "dest=/opt/a.txt mode=600 state=touch" -k
ansible all 10.76.118.31, -m file -a "dest=/opt/a.txt mode=600 state=touch" -K
ansible all 10.76.118.31, -m file -a "dest=/opt/a.txt mode=600 state=touch" -s
ansible all 10.76.118.31, -m file -a "dest=/opt/a.txt mode=600 state=touch"
ansible all -i 10.76.118.31, -m file -a "dest=/opt/a.txt mode=600 state=touch"
ansible all -i 10.76.118.31, -m file -a "dest=/opt/a.txt mode=600 state=touch" -K
ansible all -i 10.76.118.31, -m file -a "dest=/opt/a.txt mode=600 state=touch" -k
ansible all -i vashist, -m file -a "dest=/opt/a.txt mode=600 state=touch" -k
ansible all -i 10.76.118.31, -a "dest=/opt/a.txt mode=600 state=touch"
ansible 127.0.0.1 -a "dest=/opt/a.txt mode=600 state=touch"
ansible 127.0.0.1 -m -a "dest=/opt/a.txt mode=600 state=touch"
ansible 127.0.0.1 -m "dest=/opt/a.txt mode=600 state=touch"
ansible 127.0.0.1 "dest=/opt/a.txt mode=600 state=touch"
clear
sudo yum update
sudo tee /etc/yum.repos.d/docker.repo <<-'EOF'
[dockerrepo]
name=Docker Repository
baseurl=https://yum.dockerproject.org/repo/main/centos/7/
enabled=1
gpgcheck=1
gpgkey=https://yum.dockerproject.org/gpg
EOF

sudo yum install docker-engine
docker info
sudo systemctl enable docker.service
docker
sudo yum install docker-engine
sudo systemctl enable docker.service
docker info
systemctl start docker
docker info
docker images
docker pull jenkins
docker ps
docker run -d jenkins
docker ps
docker run -p 8080:8080 -p 50000:50000 jenkins
ps -ef | grep junkin
docker -ps
docker ps
ifconfig -a
docker ps
docker psa
docker ps a
docker ps -a
docker start daeff9417a4d
docker ps
docker ls 7e214e652598
docker top 7e214e652598
docker pull swathimunnangidocker/get-started
docker exec run daeff9417a4d /bin/bash 
docker exec -ir run daeff9417a4d /bin/bash 
docker exec -ir daeff9417a4d /bin/bash 
docker exec -it daeff9417a4d /bin/bash 
docker attach daeff9417a4d
docker ps
docker ps -a
docker top daeff9417a4d
docker top 7e214e652598
docker logs daeff9417a4d
docker exec -it daeff9417a4d /bin/bash
docker exec -it daeff9417a4d /bin/bash 
docker ps
docker exec -it 7e214e652598 /bin/bash 
docker ps
docker exec -it daeff9417a4d /bin/bash 
docker images
docker exec -it 452a96d81c30 /bin/bash 
docker exec -itd 452a96d81c30 /bin/bash 
docker exec -itd ubuntu /bin/bash
docker ps -a
docker run 99e41e1184c0 /bin/bash
docker run ubuntu /bin/bash
docker ps -a
docker rm 8d94fd8646d7 99e41e1184c0 efba496c82bd
docker ps -a
docker run -itd ubuntu /bin/bash
docker ps -a
docker exec -it 9e47fb34f1fd /bin/bash
exit
uname -a
ansible all -i 10.76.118.116, -m setup -u ec2-user -k
ansible all -i 10.76.118.116, -m setup -u root -k
ansible all 10.76.118.116, -m setup -u root -k
ansible 10.76.118.116 -m setup -u root -k
ansible all 10.76.118.116, -m setup -u root -k
ansible all -i 10.76.118.116, -m setup -u root -k
ansible all -i 10.76.118.116, -m setup -u vashist -k
ssh root@10.76.118.116
ansible all -i 10.76.118.116, -m setup -u vashist -k
ansible all -i 10.76.118.116, -m setup -u vashist -k >/tmp/vash
ls -ltr /tmp/vash
cat /tmp/vash
ansible all -i 10.76.118.116, -m setup -u root -k >/tmp/vash
ansible all -i 10.76.118.116, -m setup -u root -k >/tmp/vash1
ls -ltr /tmp/vash*
ansible all -i 10.76.118.116, -m setup -u vashist -k >/tmp/vash
ls -ltr /tmp/vash*
diff /tmp/vash1 /tmp/vash
ansible all -i 10.76.118.116, -m yum -a "name=httpd state=present" -u root -k
ansible all -i 10.76.118.116, -m service -a "name=httpd state=started" -u root -k
pwd
vi index.html
ansible all -i 10.76.118.116, -m copy -a "src=/root/index.html dest=/var/www/html/index.html mode=600" -u root -k
ansible all -i 10.76.118.116, -m copy -a "src=/root/index.html dest=/var/www/html/index.html mode=600 owner=apache group=apache" -u root -k
SERVER=10.76.118.116
ansible all -i $SERVER -m copy -a "src=/root/index.html dest=/var/www/html/index.html mode=600 owner=apache group=apache" -u root -k
su vashist
sudo vashsit
su - vashist
passwd vashist
adduser
adduser vashist
passwd vashsit
passwd vashist
su - vashist
cd /var/www/
su - vashist
vi /etc/ssh/sshd_config
su - vashist
echo $ANSIBLE_CONFIG
cd /etc/ansible/
ls
cat ansible.cfg
clear
cat ansible.cfg
cat ansible.cfg | grep -i fork
cat ansible.cfg | grep -i key
cat ansible.cfg | grep -i log
cat ansible.cfg | grep -i path
cat ansible.cfg
cat ansible.cfg | grep -v ^#
cat ansible.cfg 
cat ansible.cfg | more
pwd
cat ansible.cfg | more
ansible-doc -1
ansible-doc -l
ansible-doc -s apt_rpm
ansible-doc apt_rpm
ansible-doc
ansible-doc-2.7 apt_rpm
ansible-doc -l | wc -l
asbfdj
stty -echo
sxbkl
ls
ls -ltr
stty echo
slmlk
skv;l
ls
ansible-doc-2.7 -l | wc -l
ansible-doc-2.7 -l | grep setup
ansible-doc-2.7 setup
pwd
ls
vi ansible.cfg 
ansible-doc-2.7 -l setup
systemctl stop httpd
which httpd
pwd
cd /root
vi httpd_setup.yml
pwd
ls -ltr
cat httpd_setup.yml
vi inventory
cat httpd_setup.yml
cat inventory 
vi httpd_setup.yml
ansible-playbook httpd_setup.yml
vi httpd_setup.yml
ansible-playbook all -i inventory httpd_setup.yml -u vashist
ansible-playbook -i all inventory httpd_setup.yml -u vashist
ansible-playbook -i inventory httpd_setup.yml -u vashist
ansible-playbook -i inventory httpd_setup.yml -u vashist -b
ls -ltr
chmod 755 httpd_setup.yml inventory 
ls -ltr
chown vashist:root httpd_setup.yml inventory
su - vashist
cp httpd_setup.yml /home/vashist
cp inventory /home/vashist
ls -ltr
cat inventory
cp inventory /home/vashist/inventory.1
su - vashist
cp -p /root/index.html /home/vashist/
su - root
su - vashist
chown vashist:vashist /home/vashist/index.html
su - vashsit
su - vashist
yum install git
git init
git config user.name solankevr
git config user.name "solankevr@rediffmail.com"
pwd
ls -ltr
git add .
git commit -m"Adding my backp"
git config --global user.name "solankevr"
git config --global user.email "solankevr@rediffmail.com"
git add .
git commit -m"Adding my backp"
git push HTTP-URL master
git push https://github.com/solankevr/Vashist.git master
ls -ltr
cat httpd_setup.yml
cp -p httpd_setup.yml common.yaml
pwd
cd /home/vashist
ls -ltr
git add .
git init
git add .
git commit -m"Adding my backp"
git push https://github.com/solankevr/Vashist.git master
pwd
ls -ltr
cp * /root
y
exit
