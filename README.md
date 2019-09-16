Alread! Present what you read
========================================

## Clone repo

```
git clone https://github.com/vindex10/bayes-alread.git
```

## Prepare environment

```
cd bayes-alread
npm install
```

## Edit data

Both files are multiline jsons. Each line represents entity.

### Nodes: `data/nodes.json`

```
{"data": {"id": "<node id. format category:id>", "title": "<long title>", "alias": "<show instead of title>", "status": "read|<your status>"}}
```

*Note*

* Format of id *requires* category
* If `status` is `read`, nodes will be colored in green.
* If `alias` is present, it is used to describe node, otherwise `title` is used. Moreover, title/alias being prefixed with
category extracted from id.


### Edges: `data/edges.json`

```
{"data": {"id": "<entity id>", "source": "<source node id>", "target": "<target node id>"}}
```

## Build

```
npm run build
```

Result will be stored in `dist/` folder


## Development mode

```
npm start
```

Starts development server which will continuously build the app. You can use it on regular basis as well to see
the graph updates immediately.

## Commit & Push

You can use `npm run pages` to build `docs/` dir. It is the same as `build`, and used for Github Pages. You can put it
as a pre-commit hook:

.git/hooks/pre-commit

```
#!/bin/sh

npm run pages
git add docs/
```

this will re-build docs each time you commit, to be sure Pages have up to date graph.
