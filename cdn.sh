# chmod +x ./cdn.sh
# ./cdn.sh

VERSION=1.0.1
FOLDER=vue-table-export
NAME=@d2-projects/vue-table-export

qshell account
qshell qupload2 \
--src-dir=/Users/liyang/Documents/code/$FOLDER/dist \
--bucket=d2-cdn \
--key-prefix=packages/$NAME@$VERSION/ \
--overwrite=true \
--check-exists=true \
--check-hash=true \
--check-size=true \
--rescan-local=true \
--thread-count=32

echo done 上传完成