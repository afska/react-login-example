#!/bin/bash

function try {
  "$@"
  local status=$?
  if [ $status -ne 0 ]; then
      echo "!!!Error!!! with $1" >&2
      exit $?
  fi
  return $status
}

try npm run build

current_branch=$(git branch | grep \* | cut -d ' ' -f2)
git branch -D deploy
git branch -D tmp-deploy
try git checkout -b deploy
try git add -Af build/
try git commit -m "Deploy @ $(date +'%d/%m/%Y')"
try git subtree split --prefix build deploy -b tmp-deploy
try git push -f origin tmp-deploy:gh-pages
try git checkout "$current_branch"
