const fs = require('fs')
const crypto = require('crypto')

const findDuplicates = dir => {
    const explored = {}
    const toExplore = [dir]
    const duplicates = []

    while (toExplore.length) {
        const path = toExplore.pop()
        const file = fs.statSync(path)
        if (file.isDirectory()) {
            fs.readdirSync(path).forEach(subPath => {
                toExplore.push(`${path}/${subPath}`)
            })
        } else {
            const fileHash = hash(path)
            const lastEdited = file.mtime
            if (explored.hasOwnProperty(fileHash)) {
                const exploredFile = explored[fileHash]
                if (lastEdited > exploredFile.edited) {
                    duplicates.push([path, exploredFile.path])
                } else {
                    duplicates.push([exploredFile.path, path])
                    explored[fileHash] = { edited: lastEdited, path: path }
                }
            } else {
                explored[fileHash] = { edited: lastEdited, path: path }
            }
        }
    }
    return duplicates
}

const hash = path => {
    const file = fs.statSync(path);
  
    const sampleSize = 4000;
    const totalBytes = file.size;
  
    const hash = crypto.createHash('sha512');
  
    // If the file is too short to take 3 samples, hash the entire file
    if (totalBytes < sampleSize * 3) {
      hash.update(fs.readFileSync(path));
  
    } else {
      const numBytesBetweenSamples = (totalBytes - sampleSize * 3) / 2;
  
      const buffer = Buffer.alloc(sampleSize * 3);
  
      // Read first, middle, and last bytes
      for (let offsetMultiplier = 0; offsetMultiplier <= 2; offsetMultiplier++) {
        const fd = fs.openSync(path, 'r');
  
        const offset = offsetMultiplier * sampleSize;
        const position = offsetMultiplier * (sampleSize + numBytesBetweenSamples);
  
        fs.readSync(fd, buffer, offset, sampleSize, position);
      }
  
      hash.update(buffer);
    }
  
    return hash.digest();
  }
  