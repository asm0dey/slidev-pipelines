---
download: true
layout: intro
colorSchema: 'dark'
defaults:
  layout: 'default'
selectable: true
highlighter: shiki
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
layout: image-custom-size
backgroundSize: contain
image: etl.png
---

# Data processing


---
layout: image-custom-size
backgroundSize: contain
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
layout: image-custom-size
backgroundSize: contain
image: unit.png
---

# Pyramid of testing. Unit


---
layout: image-custom-size
backgroundSize: contain
image: datalake_bronze.jpg
---

---
layout: contain
image: pipeline.png
---

# Typical pipeline

---

# Typical pipeline

```scala {all|1-4|6-7|8|9-10}
StructType schema = new StructType(new StructField[]{
  new StructField("pk", DataTupes.LongType, false, MetaData.empty()),
  new StructField("aa", DataTupes.StringType, false, MetaData.empty()),
})

spark.read
  .schema(schema)
  .csv(/* path */)
  .map(/* mapper */)
  .show()
```