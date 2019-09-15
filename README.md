Alread! Present what you read
========================================

### Clone repo

```
git clone https://github.com/vindex10/bayes-alread.git
```

### Prepare environment

```
cd bayes-alread
npm install
```

### Edit data

Both files are multiline jsons. Each line represents entity.

* `data/nodes.json`

```
{"data": {"id": "<node id>", "title": "<long title>", "alias": "<show instead of title>", "status": "read|<your status>"}}
```

if `status` is `read`, nodes will be colored in green.


* `data/edges.json`

```
{"data": {"id": "<entity id>", "source": "<source node id>", "target": "<target node id>"}}
```
