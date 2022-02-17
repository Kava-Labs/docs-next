#!/usr/bin/env bash

# Clone each module's markdown files
baseGitUrl="https://raw.githubusercontent.com/Kava-Labs"

# Kava Modules docs
modulesGitRepo="kava"
modulesDir="Modules"

mkdir -p "./${modulesDir}"

kavaTmpDir="kava-tmp"

mkdir -p "${kavaTmpDir}"
git clone "https://github.com/Kava-Labs/kava.git" $kavaTmpDir
cd $kavaTmpDir

for D in ./x/*; do
  if [ -d "${D}" ] && [ -d "${D}/spec" ]; then
    rm -rf "../${modulesDir}/$(echo $D | awk -F/ '{print $NF}')"
    mkdir -p "../${modulesDir}/$(echo $D | awk -F/ '{print $NF}')" && cp -r $D/spec/* "$_"
  fi
done

cd ..
rm -rf $kavaTmpDir

# Client docs (JavaScript SDK)
clientGitRepo="javascript-sdk"
clientDir="building"

mkdir -p "./${clientDir}"
curl "${baseGitUrl}/${clientGitRepo}/master/README.md" -o "./${clientDir}/${clientGitRepo}.md"
echo "---
parent:
  order: false
---" > "./${clientDir}/readme.md"

# Kava Tools docs
toolsGitRepo="kava-tools"
toolsDir="tools"
toolDocs=("auction" "oracle")

mkdir -p "./${toolsDir}"
for T in ${toolDocs[@]}; do
  curl "${baseGitUrl}/${toolsGitRepo}/master/${T}/README.md" -o "./${toolsDir}/${T}.md"
done

# Add Go tools
goToolsGitRepo="go-tools"
goToolsDocs=("sentinel")

for T in ${goToolsDocs[@]}; do
  curl "${baseGitUrl}/${goToolsGitRepo}/master/${T}/README.md" -o "./${toolsDir}/${T}.md"
done

# Copy the community tools
cp communitytools.md "./${toolsDir}/community.md"
echo "---
parent:
  order: false
---" > "./${toolsDir}/readme.md"
