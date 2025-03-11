<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Http;


use Illuminate\Http\Request;

class FacebookWebhookController extends Controller
{
    public function verify(Request $request)
    {
        $verifyToken = env('FACEBOOK_VERIFY_TOKEN'); // Store token in .env

        $hubMode = $request->query('hub.mode');
        $hubVerifyToken = $request->query('hub.verify_token');
        $hubChallenge = $request->query('hub.challenge');

        if ($hubMode && $hubVerifyToken) {
            if ($hubMode === 'subscribe' && $hubVerifyToken === $verifyToken) {
                return response($hubChallenge, 200); // Respond with challenge token for verification
            } else {
                return response('Forbidden', 403); // Invalid token
            }
        }

        return response('Bad Request', 400);
    }

    public function handle(Request $request)
    {
        $data = $request->all();

        // Process incoming messages from Facebook
        if (isset($data['entry'])) {
            foreach ($data['entry'] as $entry) {
                foreach ($entry['messaging'] as $messageEvent) {
                    $senderId = $messageEvent['sender']['id'];
                    $messageText = $messageEvent['message']['text'] ?? null;

                    if ($messageText) {
                        // Send a message back to the user
                        $this->sendMessage($senderId, "You said: {$messageText}");
                    }
                }
            }
        }

        return response()->json(['status' => 'success']);
    }

    private function sendMessage($recipientId, $message)
    {
        $accessToken = env('FACEBOOK_PAGE_ACCESS_TOKEN'); // Store token in .env
        $url = "https://graph.facebook.com/v12.0/me/messages?access_token={$accessToken}";

        $data = [
            'recipient' => ['id' => $recipientId],
            'message' => ['text' => $message],
        ];

        // Send POST request to Facebook API
        $response = Http::post($url, $data);
    }
}
