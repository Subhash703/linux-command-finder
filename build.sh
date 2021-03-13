#! /bin/bash

npm build
cat "/* /index.html 200" > build/_redirects 