import axios from 'axios';

interface CreateConversionOptions {
  cid: string;
  amountCents: number;
}

export async function createTrackDeskConversion({
  cid,
  amountCents,
}: CreateConversionOptions): Promise<void> {
  try {
    const apiUrl = 'https://kyynk.trackdesk.com';

    const amountValue = (amountCents / 100).toFixed(2);

    const conversionUrl = `${apiUrl}/tracking/conversion/v1?conversionTypeCode=sale&cid=${encodeURIComponent(
      cid,
    )}&amount.value=${encodeURIComponent(amountValue)}`;

    await axios.get(conversionUrl, {
      timeout: 10000,
    });
  } catch (error) {
    console.error(error);
  }
}
