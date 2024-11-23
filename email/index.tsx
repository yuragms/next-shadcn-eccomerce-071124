import { Resend } from 'resend';
import { SENDER_EMAIL, APP_NAME } from '@/lib/constants';
import PurchaseReceiptEmail from './purchase-receipt';
import { Order } from '@/types';
const resend = new Resend(process.env.RESEND_API_KEY as string);
export const sendPurchaseReceipt = async ({ order }: { order: Order }) => {
  console.log(order.user.email);
  // console.log('NEXT_PUBLIC_SERVER_URL', process.env.NEXT_PUBLIC_SERVER_URL);
  const res = await resend.emails.send({
    from: `${APP_NAME} <${SENDER_EMAIL}>`,
    to: order.user.email,
    subject: 'Order Confirmation',
    react: (
      <PurchaseReceiptEmail
        order={order}
        serverUrl={
          process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
        }
      />
    ),
  });
  console.log(res);
};
