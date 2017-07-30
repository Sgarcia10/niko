# Look for mongod service
sudo lsof -iTCP -sTCP:LISTEN | grep mongo

#Look process listening on port
lsof -i :3000

#kill process pid
kill -9 <pid>

#see process and uses of memory
ps aux --sort -rss
