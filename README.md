# Validation
Simple compiled validations for Node JS. It can be translated to front-end javascript. (This is my most commonly used validations as of now, will add more in the future).

<b>Sample Use:<b/>

```sh
var validation = require('/validation');
var errors = [];

errors = validation.mobileNo(req.body.mobileNo);
if (errors.length > 0) {
  res.status(400).send({errors: errors});

  return;
}

errors = validation.password(req.body.password);
if (errors.length > 0) {
  res.status(400).send({errors: errors});

  return;
}

errors = validation.email(req.body.email);
if (errors.length > 0) {
  res.status(400).send({errors: errors});

  return;
}
```
