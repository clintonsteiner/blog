---
title: Jenkins Python Automation
---

```python
# JenkinsPythonAutomation
import os
import xml.etree.ElementTree as ET
from jenkinsapi.jenkins import Jenkins

jenkinsFile = 'Jenkinsfile.build'
#with open(jenkinsFile, 'r') as file:
#    script = file.read()
script = 'MockJenkinsScript'
url = 'MockJenkinsScript'
apikey = 'MockApiKey'
uname = os.environ.get('USER')
jenkins = Jenkins(url, uname, apikey, timeout=120)
jobUrl = 'MockJenkinsScript'
job = jenkins.get_job_by_url(jobUrl, job_name='Example')
config = job.get_config()
parsedXml = ET.fromstring(config)

elm = parsedXml.find('definition').find('script')
elm.text = script

response = job.update_config(ET.tostring(parsedXml, encoding='unicode'), full_response=True)
job.invoke()
```
