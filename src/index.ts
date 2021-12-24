const sdkVersion = "0.0.1";
const url = "https://reef-pay.web.app.com/api/checkout-request";

interface ReefpayShopConfig {
  apiKey: string;
  checkoutType: string;
  checkoutId: string;
  buyerId?: string;
}

interface CheckoutData {
  checkoutType: string;
  checkoutId: string;
  itemId: string;
  buyerId?: string;
}

/**
 * Initializes the shop for checkout.
 * @returns {Function} Returns a callable function that accepts an itemId to trigger a checkout.
 */
function initializeShop(config: ReefpayShopConfig): Function {
  return (itemId: string) => {
    const apiKey = config.apiKey;
    const checkoutId = config.checkoutId;
    const checkoutType = config.checkoutType;
    const buyerId = config.buyerId;

    postData(url, apiKey, { checkoutType, checkoutId, itemId, buyerId }).then(
      (data) => {
        console.log(data);
      }
    );
  };
}

/**
 * Sends the config data to the checkout API.
 * @returns {Promise<any>} Returns a payment url.
 */
async function postData(
  url: string,
  apiKey: string,
  data: CheckoutData
): Promise<any> {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      "SDK-Version": sdkVersion,
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });

  return response.json();
}

/**
 * Opens a payment url when the function is called.
 * Creates a pop-up window for desktop and a redirect for mobile.
 */

/**
 * Listens to the xxxxx API for succesfull payment or failure.
 */
// TODO:
