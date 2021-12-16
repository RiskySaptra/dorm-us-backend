const admin = require("firebase-admin");

admin.initializeApp({
  serviceAccountId:
    "firebase-adminsdk-x6l3r@money-experiment-6aac5.iam.gserviceaccount.com",
  credential: admin.credential.cert({
    type: "service_account",
    project_id: "money-experiment-6aac5",
    private_key_id: "b1539174e1100724ef04833093a7bd08ffcee7ab",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC5EDZZ8PEfrLIO\nr0LJfRSUt1dYhVo6qLQAxbZAMDeLlVlHyY9lZPrqgQe1o33jP4Ei6ArBNZX9vQ/N\nI4AXd5PmxUavSv2gpl7rZOhZc4Dq/nP2GfzJbfqM0hKMl0BHlyZ6W7sqE8o1/aKA\nCSNO7UnhWlIhp2H7kNaeLMZalfWSH1cIQ18TJF5qe018qgGhlJ0x3PncibGspCuZ\ngsqGr7gxc0WjDJ09xbFRr3smNHf00kakBpwDUo+YhmxkC8d8EVkqsc51+ag9mX/i\n1Ek4FbJ4mlSc3SELpY9fyXuaCqOA6pdkjSjDv1md/S9VpUuAsbbo8yPGQQdxt0pN\nA1cB1iIvAgMBAAECggEAHzZ+TEYojQSWFYb21z/68ChKGZqIQNuCXJz8I7BeNfMv\nFz4GKv5QmavAjqCwE1t7HtWPNs4gaabxGtLRgGPBNMtyJA+cXnOhD8e5rpieFkRr\nb4crjRe5CfZGfaLnCwwRx9Jf63ViBiAsv7aK132LF/ChaJ6wFntzz0LTA6VGQWox\nMJHH0Eq4MPAlVSHoX5QmJ9uI5YnvMljbVDmz3IoHQh4fN1dQjRzI+D/bAgDubGgj\n2SaK2KQVFy5bE+3EI9Fk/aIuLIrZcAoqk7p+wbhx7zSyyh3xQOKgzrO4whborZtU\nYCHOI4UMEm7ywoFJprM6zTYyJcEapS7MDDxUX8y/XQKBgQDomA7l5XLFg5quK9Vt\ntkmj228gfJ2GSHC/Z0bS7uEpCUKPae3Dnuz5IHUmXrhKlZH+NXFr75UXug6x7THG\nJ2XiIF9uidWpOhU7qaSWxknqy/rdrVxzWE48S/uuRHRQmqtjSY7Pwre1PUXbKm6R\nh/B0htmEt/n2Y543o+rZHT3btQKBgQDLr7L0CoNHCfUIG9KttUtrkCDHLkVvQWnG\neOsIQEagMw4dTzzYSlzDy3F+FqjDGB0J+VxLjWPeOwFLFLDw1rxsMG1/5r5np1Bf\npblxJrfKC3LkozgzuGp5M+opm8Uc0ftMb53Ggksm0NtWlxG2iF+U5HHyEAskaQaY\n7ixoKnFc0wKBgDVgsAqSXYR2b0kJRjGnY7723MnXz07B0R4b1WUS7Rk9xsiixq3e\nCwQhLsFfe2uiZ56vJRhgIxcO29B5XrLa18bNJxl3CFGNwtGuXNc9Kjl4FlpJLq5J\n1aqAxYF4tDjLRgnDF8MWLJKrPRzO4BEF4WjciY6rqfGhau3Z8EtjKo8BAoGARfQ1\n1bK2m3NEAGDt3lLhcDOzzjSKDEe++DcXIWJR3zspoc9Q6ke/zE7Wz6MgmsBxWLeX\nhyssHWrOaubUTiKx28ZWFRM+WYMRC4hzQ/U0MeP0tamI59pyVuYJifjBncBQOlQr\nL74X6WDZs8d2geYcTZqXt7bi3MJlTaie/7dz75kCgYBTH6h9A4enIdsxtPw3sbhy\ngfaELdnz9Nw7I5SAWwt920CQeSA234W0ZJMhDkFciDj8q1efQGtjo1Y9nxvfLWbx\nkxX6lYYf8+XjuXAew+Htcr/xAtdLDH0FuwQk3G9o12ddR9xxupq6A45DE4qoQisK\nVIQIZXRtQJ9rGMXPai54Dg==\n-----END PRIVATE KEY-----\n",
    client_email:
      "firebase-adminsdk-x6l3r@money-experiment-6aac5.iam.gserviceaccount.com",
    client_id: "116095775542094542184",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-x6l3r%40money-experiment-6aac5.iam.gserviceaccount.com",
  }),
});

export { admin };
