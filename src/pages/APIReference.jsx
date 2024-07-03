
import React from 'react';

const APIReference = () => {
  return (
    <div className="api-reference">
      <h1>API Reference</h1>

      <section id="authentication">
        <h2>Authentication</h2>
        <p>To authenticate your API requests, you will need to generate a Bearer token using your account code and client key. The token should be included in the Authorization header of your requests.</p>
        <pre>
          <code>
            {`import base64

def generate_token(account_code, client_key, secret_key='n3xusT3c#'):
    token_string = f"{account_code}-{client_key}-{secret_key}"
    encoded_token = base64.b64encode(token_string.encode()).decode()
    return f"Bearer {encoded_token}"

# Example usage
account_code = '83234'
client_key = 'JkxxOngMA'
token = generate_token(account_code, client_key)
print(token)  # Bearer W6dprK2khmaaWJ5g5trryaaQjtOspcHNxqfZm9U=
`}
          </code>
        </pre>
      </section>

      <section id="endpoints">
        <h2>Endpoints</h2>
        <h3>Pay In</h3>
        <p>Endpoint: <code>https://api.nexuspay.cloud/payin/process</code></p>
        <p>Method: POST</p>
        <p>Headers:</p>
        <pre>
          <code>
            {{
              'Content-Type': 'application/json',
              'Authorization': 'Bearer YOUR_GENERATED_TOKEN'
            }}
          </code>
        </pre>
        <p>Body Parameters:</p>
        <pre>
          <code>
            {{
              "name": "gerald",
              "email": "marcSmith@yahoo.com",
              "amount": "100",
              "pay_method": "sp-qrph",
              "mobilenumber": "0909333322",
              "address": "Manila ph",
              "webhook": "https://api.nexuspay.cloud/hook/icore.php",
              "remarks": "remarks"
            }}
          </code>
        </pre>
      </section>

      <section id="example-code">
        <h2>Example Code</h2>
        <h3>Python Example</h3>
        <pre>
          <code>
            {`import requests
import json

# Function to generate token (hypothetical)
def generate_token(account_code, client_key, secret_key='n3xusT3c#'):
    token_string = f"{account_code}-{client_key}-{secret_key}"
    encoded_token = base64.b64encode(token_string.encode()).decode()
    return f"Bearer {encoded_token}"

# Example usage
account_code = '83234'
client_key = 'JkxxOngMA'
token = generate_token(account_code, client_key)

# Common function to handle API requests
def make_request(url, payload, headers, method="POST"):
    try:
        if method == "POST":
            response = requests.post(url, headers=headers, data=payload)
        elif method == "GET":
            response = requests.get(url, headers=headers, params=payload)
        else:
            raise ValueError("Unsupported HTTP method")

        response.raise_for_status()  # Raise an HTTPError for bad responses (4xx and 5xx)
        print(f"Status Code: {response.status_code}")
        print(f"Response Text: {response.text}")
    except requests.exceptions.HTTPError as http_err:
        print(f"HTTP error occurred: {http_err}")
    except requests.exceptions.ConnectionError as conn_err:
        print(f"Connection error occurred: {conn_err}")
    except requests.exceptions.Timeout as timeout_err:
        print(f"Timeout error occurred: {timeout_err}")
    except requests.exceptions.RequestException as req_err:
        print(f"An error occurred: {req_err}")

# Example API call
url = "https://api.nexuspay.cloud/payin/process"
payload = json.dumps({{
  "name": "gerald",
  "email": "marcSmith@yahoo.com",
  "amount": "100.00",
  "pay_method": "sp-qrph",
  "mobilenumber": "0909333322",
  "address": "Manila ph",
  "webhook": "https://api.nexuspay.cloud/hook/icore.php",
  "remarks": "remarks"
}})
headers = {{
  'Authorization': token,
  'Content-Type': 'application/json'
}}

make_request(url, payload, headers)
`}
          </code>
        </pre>
      </section>

      <section id="error-codes">
        <h2>Error Codes</h2>
        <p>Below are some common error codes you may encounter:</p>
        <ul>
          <li>2005: Authentication Failed.</li>
          <li>2041: Invalid Signature.</li>
          <li>2043: Service ID not found.</li>
          <li>3004: Payment not found.</li>
          <li>3006: Provider not found.</li>
          <li>3007: Bank not found.</li>
          <li>3008: Method not found.</li>
          <li>3012: Cannot process transaction because of error on the provider side.</li>
          <li>6001: Payment amount limit exceeded.</li>
          <li>6002: Payment amount less than minimal amount.</li>
          <li>7008: Invalid Callback Token.</li>
          <li>7009: Must be Alpha Numeric.</li>
        </ul>
      </section>

      <section id="statuses">
        <h2>Statuses</h2>
        <ul>
          <li><strong>awaiting_redirect</strong>: Payment is waiting to be redirected</li>
          <li><strong>processing</strong>: Payment is processing</li>
          <li><strong>success</strong>: Payment has been successfully paid</li>
          <li><strong>fail</strong>: Payment has been tag failed by provider</li>
        </ul>
      </section>
    </div>
  );
};

export default APIReference;

<section id="payout-api">
  <h2>Payout API</h2>
  <h3>Endpoint</h3>
  <p>Endpoint: <code>https://api.nexuspay.cloud/payout/payout</code></p>
  <p>Method: POST</p>
  <p>Headers:</p>
  <pre>
    <code>
      {{
        'Content-Type': 'text/plain',
        'Authorization': 'Bearer YOUR_GENERATED_TOKEN'
      }}
    </code>
  </pre>
  <p>Body Parameters:</p>
  <pre>
    <code>
      {{
        "name": "mark pogi hook2 v2",
        "email": "marcSmith@yahoo.com",
        "amount": "100",
        "mobilenumber": "09058086521",
        "address": "Manila ph",
        "bank_account": "09058086521",
        "pay_method": "allbank_payout_g_exchange",
        "remarks": "cash out"
      }}
    </code>
  </pre>
  <h3>Example CURL Command</h3>
  <pre>
    <code>
      {`curl -X POST 'https://api.nexuspay.cloud/payout/payout' -H 'Content-Type:text/plain' -H 'Authorization:Bearer YOUR_GENERATED_TOKEN' -d '{
        "name": "mark pogi hook2 v2",
        "email": "marcSmith@yahoo.com",
        "amount": "100",
        "mobilenumber": "09058086521",
        "address": "Manila ph",
        "bank_account": "09058086521",
        "pay_method": "allbank_payout_g_exchange",
        "remarks": "cash out"
      }'`}
    </code>
  </pre>
</section>
