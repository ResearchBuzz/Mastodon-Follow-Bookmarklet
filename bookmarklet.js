javascript:(function() {
  var input = window.getSelection().toString().trim() || prompt("Please enter a Mastodon username:", "@user@instance");
  if (input) {
    var parts = input.split('@');
    if (parts.length === 3 && parts[0] === "") {
      var user = parts[1];
      var community = parts[2];
      // change YOUR_INSTANCE_NAME_HERE to, well, your instance name.
      var url = 'https://YOUR_INSTANCE_NAME_HERE/authorize_interaction?uri=https://' + community + '/@' + user;
      window.location.href = url;
    } else {
      alert("Invalid input. Please use the format '@user@instance'.");
    }
  }
})();
