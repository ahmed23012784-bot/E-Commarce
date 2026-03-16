
import Image from "next/image";
import { authoption } from "@/auth";
import { jwtDecode } from "jwt-decode";
import { getServerSession } from "next-auth";
import {order,CartItem}from "@/Interfaces/allorders"
export default async function Page() {

  const session = await getServerSession(authoption);
  const decoded = jwtDecode<{ id: string }>(session?.token || "");

  async function getAllOrders() {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/orders/user/${decoded.id}`
    );
    return res.json();
  }

  const orders = await getAllOrders();

  return (
    <div className="container mx-auto p-6">

      <h1 className="text-3xl my-4 lineeh font-bold">My Orders</h1>

      {orders.map((order:order) => (
        <div
          key={order._id}
          className="border rounded-lg p-5 mb-8 shadow-sm"
        >

          {/* Order Info */}
          <div className="mb-4">
            <p><span className="font-semibold">Order ID:</span> {order.id}</p>
            <p><span className="font-semibold">Total Price:</span> {order.totalOrderPrice} EGP</p>
            <p><span className="font-semibold">Payment:</span> {order.paymentMethodType}</p>
            <p>
              <span className="font-semibold">Paid:</span>{" "}
              {order.isPaid ? "Yes ✅" : "No ❌"}
            </p>
          </div>

          {/* Products */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

            {order.cartItems.map((item: CartItem) => (
              <div
                key={item._id}
                className="border p-4 rounded-md flex flex-col items-center gap-2"
              >

                <Image
                  src={item.product.imageCover}
                  alt={item.product.title}
                  width={180}
                  height={180}
                  className="rounded-md object-cover"
                />

                <p className="font-semibold text-center">
                  {item.product.title}
                </p>

                <p>Price: {item.price} EGP</p>

                <p>Quantity: {item.count}</p>

              </div>
            ))}

          </div>

        </div>
      ))}

    </div>
  );
}