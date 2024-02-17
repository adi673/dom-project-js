// Package import
import { ReclaimClient } from '@reclaimprotocol/js-sdk';

// Initialize Reclaim Client
const reclaimClient = new ReclaimClient("0x3e65E013b2c8463bdbDCd9502030b4a1B756C126");

// Constants
const APP_SECRET = "0x34a966042e49694618d9d3e7c6a6f430c6198e408008ca0962dee29ab4d4c114";
const providers = [
    '6d032171-1187-4fcb-9146-8cfcbfef2579', // Epic
    '018668fc-013d-41fd-96c1-d3a867743cf7',
];

// Function to initiate verification request
const initiateVerification = async () => {
  // Build provider
  const providerV2 = await reclaimClient.buildHttpProviderV2ByID(providers);

  // Build requested proofs
  const requestProofs = reclaimClient.buildRequestedProofs(providerV2, reclaimClient.getAppCallbackUrl());

  // Set signature
  reclaimClient.setSignature(await reclaimClient.getSignature(requestProofs, APP_SECRET));

  // Create verification request
  const reclaimReq = await reclaimClient.createVerificationRequest(providers);

  // Start verification
  const url = await reclaimReq.start();

  return url;
};

// Example usage
initiateVerification().then(url => {
  console.log('Verification URL:', url);
}).catch(error => {
  console.error('Error:', error);
});
