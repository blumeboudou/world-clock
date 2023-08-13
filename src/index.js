function updateTime() {
  // Buenos Aires
  let buenosAiresElement = document.querySelector("#los-angeles");
  let buenosAiresDateElement = buenosAiresElement.querySelector(".date");
  let buenosAiresTimeElement = buenosAiresElement.querySelector(".time");
  let buenosAiresTime = moment().tz("America/Argentina/Buenos_Aires");

  buenosAiresDateElement.innerHTML =
    buenosAiresTime.format("dddd Do MMMM YYYY");
  buenosAiresTimeElement.innerHTML = `${buenosAiresTime.format("h:mm:ss")}
<small>${buenosAiresTime.format("A")}</small>`;

  // Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("dddd Do MMMM YYYY");
  sydneyTimeElement.innerHTML = `${sydneyTime.format("h:mm:ss")}
<small>${sydneyTime.format("A")}</small>`;
}

updateTime();
setInterval(updateTime, 1000);
