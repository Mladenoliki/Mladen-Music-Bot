module.exports = async (client) => {
  let statuses = [
    "Apolo™ Radio",
    "Za listu komandi kucajte '>help'"
  ]

  setInterval(function() {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(status, {
      type: "LISTENING",
    });
  }, 1000);

  console.log(`[API] Logged in as ${client.user.username}`);
};