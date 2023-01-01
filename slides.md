---
download: true
layout: intro
colorSchema: 'dark'
defaults:
  layout: 'default'
selectable: true
lineNumbers: true
exportFilename: index
---

# Himalayan Peaks of Testing Data Pipelines

Talk about quality of pipelines

Pasha Finkelshteyn, JetBrains

---
layout: cover
background: asm0dey.jpg
---

# Pasha Finkelshteyn

me

Developer <noto-v1-avocado /> for Big Data @ JetBrains<br>
<noto-v1-bird /> @asm0di0
<br>
<emojione-monotone-elephant /> @asm0dey@fosstodon.org

---
layout: contain
image: etl.png
---

# Data processing


---
layout: contain
image: datalake_layers.jpg
---

# Data lake?


---

# Who needs pipelines

- Data Scientists
- Data Analytics
- Marketing
- PO

---
layout: statement
---

# It have to be tested!

---
layout: statement
---

# Pyramid of testing?

---
layout: image-right
image: pyramid_e.png
---

# Pyramid of testing?

---
layout: image
image: real_pyramid.webp
---

<br>

---
layout: contain
image: unit.png
---

# Pyramid of testing. Unit


---
layout: contain
image: datalake_bronze.jpg
---

---
layout: contain
image: pipeline.png
---

# Typical pipeline

---

# Typical pipeline

```scala {all|1-4|6-7|8|9-11}
StructType schema = new StructType(new StructField[]{
  new StructField("pk", DataTupes.LongType, false, MetaData.empty()),
  new StructField("aa", DataTupes.StringType, false, MetaData.empty()),
})

spark.read
  .schema(schema)
  .csv(/* path */)
  .map(/* mapper */)
  .write
  .parquet("path")
```

---

# Unit testing of pipeline

What may we test here?

A pipeline should transform data correctly!

_Correctness is a business term_

---
layout: contain
image: unit_pipeline.png
---

# Let's paste fakes!


Fake input data
Reference data at the end of the pipeline

---

# Tools

[holdenk/spark-testing-base](https://github.com/holdenk/spark-testing-base) ← Tools to run tests

[MrPowers/spark-daria](https://github.com/MrPowers/spark-daria) ← tools to easily create test data

---
layout: contain
image: component.png
---

# Component testing

---
layout: image
image: https://d33wubrfki0l68.cloudfront.net/a661dbbe55be3e9cb77889f24835a44c6daf53c2/ce0aa/logo.png
---

# Testcontainers

---
layout: contain
image: docker_pipeline.png
---

# Testcontainers

---

# TestContainers

Supported languages:

- Java (and compatibles: Scala, Kotlin, etc.)
- Python
- Go
- Node.js
- Rust
- .NET

---

# TestContainers

```python {all|1|4|5|6|7,8}
from testcontainers postgres import PostgresContainer
import sqlalchemy

postgres_container = PostgresContainer("postgres:13")
with postgres_container as postgres:
  e = sqlalchemy.create_engine(postgres.get_connection_url())
  result = e.execute("SELECT version()")
  version, = result.fetchone()
print(version)
```