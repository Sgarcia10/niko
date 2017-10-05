# Look for mongod service
sudo lsof -iTCP -sTCP:LISTEN | grep mongo

#Look process listening on port
lsof -i :3000

#kill process pid
kill -9 <pid>

#see process and uses of memory
ps aux --sort -rss


#git
git push -u laptop master
git commit -m "This is my first commit!"
git add -i  *(*all files)*

#heroku
heroku create
git push heroku master

git remote rm heroku
heroku git:remote -a niko-uniandes
