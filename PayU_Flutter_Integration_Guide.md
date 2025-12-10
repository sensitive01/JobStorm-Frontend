# PayU Integration Guide for Flutter (Test Mode)

This guide explains how to integrate PayU Checkout Pro in your Flutter application using Test Mode.

## 1. Add Dependency

Add the `payu_checkoutpro_flutter` package to your `pubspec.yaml` file.

```yaml
dependencies:
  flutter:
    sdk: flutter
  payu_checkoutpro_flutter: ^2.0.0 # Check pub.dev for the latest version
  http: ^1.0.0 # For making API calls to your backend
```

Run `flutter pub get` to install the packages.

## 2. Platform Configuration

### Android Setup

1. Open `android/app/build.gradle` and ensure `minSdkVersion` is **21** or higher.
   ```gradle
   defaultConfig {
       ...
       minSdkVersion 21
   }
   ```

### iOS Setup

1. Open `ios/Runner/Info.plist` and add the custom scheme for callbacks (if needed for your flow, usually handled by SDK).
2. Ensure you have a valid Bundle ID.

## 3. Hash Generation Concept

**CRITICAL:** Do NOT generate hashes inside the Flutter app. You must call your Node.js backend (the one you just set up) to generate the hash.

The Flutter app will:

1.  Prepare payment params.
2.  Send params to your backend API (`/api/payment/hash`).
3.  Receive the calculated hash.
4.  Pass the hash and params to the PayU SDK.

## 4. Implementation Code

Create a file `payu_payment_service.dart` or add to your existing controller.

```dart
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:payu_checkoutpro_flutter/payu_checkoutpro_flutter.dart';
import 'package:payu_checkoutpro_flutter/PayUConstantKeys.dart';
import 'package:http/http.dart' as http;

class PayUPaymentService {
  final _payUCheckoutPro = PayUCheckoutProFlutter();

  // 1. Define your Test Mode Key
  // Ideally fetch this from your backend too, but okay for config here.
  static const String PAYU_KEY = "YOUR_TEST_MERCHANT_KEY";
  static const bool IS_PRODUCTION = false; // Set to false for Test Mode

  // 2. Main Payment Function
  Future<void> startPayment(BuildContext context, {
    required String amount,
    required String productName,
    required String firstName,
    required String email,
    required String phone,
  }) async {

    // Generate a unique Transaction ID
    String txnId = "Txn${DateTime.now().millisecondsSinceEpoch}";

    try {
      // 3. Get Hash from YOUR Backend
      Map<String, dynamic> hashData = await _fetchHashFromBackend(
        txnId: txnId,
        amount: amount,
        productInfo: productName,
        firstName: firstName,
        email: email,
      );

      String paymentHash = hashData['hash'];

      // 4. Prepare PayU Parameters
      var payUParams = {
        PayUConstantKeys.payuKey: PAYU_KEY,
        PayUConstantKeys.txnId: txnId,
        PayUConstantKeys.amount: amount,
        PayUConstantKeys.productInfo: productName,
        PayUConstantKeys.firstName: firstName,
        PayUConstantKeys.email: email,
        PayUConstantKeys.phone: phone,
        PayUConstantKeys.surl: "https://www.payumoney.com/mobileapp/payumoney/success.php", // Standard test Success URL
        PayUConstantKeys.furl: "https://www.payumoney.com/mobileapp/payumoney/failure.php", // Standard test Failure URL
        PayUConstantKeys.hash: paymentHash, // <--- The hash from backend
        // Standard Params
        PayUConstantKeys.userCredential: "valid_user_credential", // User specific ID if any
      };

      // 5. Initiate Payment
      _payUCheckoutPro.openCheckoutScreen(
        payUPaymentParams: payUParams,
        payUCheckoutProConfig: _getCheckoutConfig(),
      );

      // 6. Listen for Callbacks
      _setupCallbacks();

    } catch (e) {
      print("Payment Initialization Error: $e");
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text("Error: $e")));
    }
  }

  // Helper: Call Backend for Hash
  Future<Map<String, dynamic>> _fetchHashFromBackend({
    required String txnId,
    required String amount,
    required String productInfo,
    required String firstName,
    required String email,
  }) async {
    // Replace with your actual Backend URL (Use IP address if testing on real device, 10.0.2.2 for Emulator)
    final String apiUrl = "http://192.168.1.X:5000/api/payment/hash";

    final response = await http.post(
      Uri.parse(apiUrl),
      headers: {"Content-Type": "application/json"},
      body: jsonEncode({
        "txnid": txnId,
        "amount": amount,
        "productinfo": productInfo,
        "firstname": firstName,
        "email": email,
      }),
    );

    if (response.statusCode == 200) {
      return jsonDecode(response.body);
    } else {
      throw Exception("Failed to generate hash from backend");
    }
  }

  // Helper: UI Config
  Map<String, dynamic> _getCheckoutConfig() {
    return {
      PayUConstantKeys.primaryColor: "#49D17C",
      PayUConstantKeys.secondaryColor: "#ffffff",
      PayUConstantKeys.merchantName: "Jobstorm Test",
      PayUConstantKeys.showExitConfirmation: true,
      PayUConstantKeys.showReviewOrder: true,
    };
  }

  // Helper: Callbacks
  void _setupCallbacks() {
    _payUCheckoutPro.onPaymentSuccess = (dynamic response) {
      print("Payment Success: $response");
      // Navigate to Success Screen
    };

    _payUCheckoutPro.onPaymentFailure = (dynamic response) {
      print("Payment Failure: $response");
      // Navigate to Failure Screen
    };

    _payUCheckoutPro.onPaymentCancel = (dynamic response) {
      print("Payment Cancelled: $response");
    };

    _payUCheckoutPro.onError = (dynamic response) {
      print("Payment Error: $response");
    };
  }
}
```

## 5. Usage in UI Button

```dart
ElevatedButton(
  onPressed: () {
    PayUPaymentService().startPayment(
      context,
      amount: "15000.00",
      productName: "Starter",
      firstName: "Test User",
      email: "test@example.com",
      phone: "9999999999",
    );
  },
  child: Text("Pay Now"),
)
```

## 6. Important Notes for Testing

1.  **Test Cards**: PayU provides specific test card numbers. Use them on the payment screen.
    - Select "Credit Card"
    - Number: `5123456789012346`
    - CVV: `123`
    - Expiry: Future Date
2.  **SURL/FURL**: For mobile apps, PayU often uses specific success/failure URLs to handle the redirect back to the app correctly. The URLs provided in the code above are standard defaults for testing.
3.  **Hash Mismatch**: If you get a "Hash Mismatch" error, ensure the string sequence in your **Node.js Backend** exactly matches the parameters you are sending from Flutter. Every field (amount, productinfo, email, etc.) must match character-for-character.
