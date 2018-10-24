$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "feature name",
  "description": "",
  "id": "feature-name",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Authenication",
  "description": "",
  "id": "feature-name;authenication",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "Open Application and Enter url",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "enter username",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "enter password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "verify Msg",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPage.open_Application_and_Enter_url()"
});
formatter.result({
  "duration": 1288596620,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.enter_username()"
});
formatter.result({
  "duration": 79051008,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.enter_password()"
});
formatter.result({
  "duration": 496801466,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.verify_Msg()"
});
formatter.result({
  "duration": 28263009,
  "status": "passed"
});
});