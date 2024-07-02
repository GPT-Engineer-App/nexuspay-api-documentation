import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const APIReference = () => {
  const curlSample = `curl -X POST 'https://api.nexuspay.cloud/payin/process' \\
  -H 'Content-Type:application/json' \\
  -H 'Authorization:Bearer W6Bqqa2nhGmcWKFg5trryaaQjtOspejlo33Oep4=' \\
  -d '{
    "name": "gerald",
    "email": "marcSmith@yahoo.com",
    "amount": "100",
    "pay_method": "sp-qrph",
    "mobilenumber": "0909333322",
    "address": "Manila ph",
    "webhook": "https://api.nexuspay.cloud/payin/payinwebhook.php",
    "remarks": "remarks payin"
  }'`;

  const responseSample = `{
    "status": "success",
    "transaction_id": "1234567890",
    "amount": "100",
    "currency": "PHP",
    "pay_method": "sp-qrph",
    "remarks": "remarks payin",
    "created_at": "2023-10-01T12:34:56Z"
  }`;

  const errorSample = `{
    "status": "error",
    "message": "Invalid authorization token",
    "code": 401
  }`;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">API Reference</h1>
      <Tabs defaultValue="authentication" className="w-full">
        <TabsList>
          <TabsTrigger value="authentication">Authentication</TabsTrigger>
          <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="errors">Error Handling</TabsTrigger>
        </TabsList>
        <TabsContent value="authentication">
          <h2 className="text-2xl font-bold mb-2">Authentication</h2>
          <p>To authenticate your requests, include the following header with your API key:</p>
          <SyntaxHighlighter language="bash" style={dracula}>
            {`Authorization: Bearer YOUR_API_KEY`}
          </SyntaxHighlighter>
        </TabsContent>
        <TabsContent value="endpoints">
          <h2 className="text-2xl font-bold mb-2">Endpoints</h2>
          <p>Below are the available endpoints for the Nexuspay API:</p>
          <ul className="list-disc list-inside">
            <li><strong>POST /payin/process</strong> - Process a pay-in request</li>
            <li><strong>GET /payin/status</strong> - Check the status of a pay-in request</li>
            <li><strong>POST /payout/process</strong> - Process a payout request</li>
            <li><strong>GET /payout/status</strong> - Check the status of a payout request</li>
          </ul>
        </TabsContent>
        <TabsContent value="examples">
          <h2 className="text-2xl font-bold mb-2">Request and Response Examples</h2>
          <h3 className="text-xl font-semibold mb-1">cURL Request</h3>
          <SyntaxHighlighter language="bash" style={dracula}>
            {curlSample}
          </SyntaxHighlighter>
          <h3 className="text-xl font-semibold mb-1">Successful Response</h3>
          <SyntaxHighlighter language="json" style={dracula}>
            {responseSample}
          </SyntaxHighlighter>
        </TabsContent>
        <TabsContent value="errors">
          <h2 className="text-2xl font-bold mb-2">Error Handling</h2>
          <p>Below is an example of an error response:</p>
          <SyntaxHighlighter language="json" style={dracula}>
            {errorSample}
          </SyntaxHighlighter>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default APIReference;