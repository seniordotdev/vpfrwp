# Custom Player React

![Demo image](https://cdn.plyr.io/static/screenshot.webp)

# Description

### Custom video player for react with plyr.js

## Installation

```bash
npm i vpfrwp
```

# Props

| Name        | Description    | Default       |
| ----------- | -------------- | ------------- |
| `posterUrl` | Poster img url | Example image |
| `videoUrl`  | Video url      | Example video |
| `mainColor` | Main color     | #00b3ff       |
| `width`     | Width          | 500px         |
| `height`    | Height         | 500px         |

# Usage

```JavaScript
import React from "react"
import Player from "vpfrwp"

export default App = () => {
    return(
        <Player videoUrl="to/path/video.mp4" posterUrl="to/path/image.jpg" mainColor="#00b3ff" width="500px" height="500px" />
    )
}
```
