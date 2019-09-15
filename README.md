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
