# Look for mongod service
sudo lsof -iTCP -sTCP:LISTEN | grep mongo

#Look process listening on port
lsof -i :3000

#kill process pid
kill -9 <pid>

#see process and uses of memory
ps aux --sort -rss

#DB mlab
"connectionURI": "mongodb://sgarcia10:electro.2011@ds257485.mlab.com:57485/niko"

#git
git push -u laptop master
git commit -m "This is my first commit!"
git add -i  *(*all files)*

git init
git add -A
git commit -m 'Added my project'
git remote add origin git@github.com:scotch-io/my-new-project.git
git push -u -f origin master

#heroku
heroku create
git push heroku master

git remote rm heroku
heroku git:remote -a niko-uniandes
