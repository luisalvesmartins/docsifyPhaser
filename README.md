# Docsify Phaser Plugin

Run [Phaser](https://phaser.io) code directly from a [Docsify](https://docsify.js.org) MD file.

![demo](images/demo.png)

The markdown file is:

```
# Phaser 3 Demo running inside Docsify

Using the plugin, this is the standard Phaser javascript demo. The code is written inside the markdown.

You just need to include the Phaser javascript lib in the index.html and the plugin.

<!-- PHASER(divname) -->
    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        parent:'divname',
        physics: {
            default: 'arcade',
    ...

    }
<!-- ENDPHASER -->

And here the text continues
```

## How to install

In the Docsify index.html include the Phaser and DocsifyPhaser plugin by adding two script references:

```html
<!-- Phaser -->
<script src="https://cdn.jsdelivr.net/npm/phaser@3.15.1/dist/phaser-arcade-physics.min.js"></script>
<!-- DocsifyPhaser plugin -->
<script src="docsifyPhaser.js"></script>
```

You can add as many phaser blocks as you wish. Just ensure all the parent names are different.

## Try a demo

In the demo folder you'll find a complete sample. Run docsify as is from that folder:
```
docsify serve .
```