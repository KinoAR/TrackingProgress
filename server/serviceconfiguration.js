//Configure services for google
ServiceConfiguration.configurations.upsert(
  { service: "google" },
  {
    $set: {
      clientId: "706945199678-d55oaus3p23s6s46urmo7bq6pg4jsoid.apps.googleusercontent.com",
      loginStyle: "popup",
      secret: "dHA3VzBeuThTZBwKT8U3w97y"
    }
  }
);